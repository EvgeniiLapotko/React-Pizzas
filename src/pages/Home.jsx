import React from "react";
import { Categories, SortPopup, PizzasBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryPizzas = ["мясные", "вегатерианские", "Гриль", "Острые"];
const sort = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" },
];

const Home = () => {
    const dispatch = useDispatch();
    const item = useSelector(({ pizzas }) => pizzas.items);
    const { items: cartItems } = useSelector(({ cart }) => cart);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy, dispatch]);

    const onAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    category={categoryPizzas}
                    onClickItem={onSelectCategory}
                />
                <SortPopup sortArr={sort} activeSort={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? (
                    item.map((item, index) => {
                        return (
                            <PizzasBlock
                                key={item.id}
                                {...item}
                                onAddPizza={onAddPizza}
                                addedPizzas={
                                    cartItems[item.id] &&
                                    cartItems[item.id].length
                                }
                            />
                        );
                    })
                ) : (
                    <div className="wrap-lds">
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
