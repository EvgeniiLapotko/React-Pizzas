export const addPizzaToCart = (pizzaObj) => ({
    type: "ADD_PIZZA_CART",
    payload: pizzaObj,
});

export const deletePizzas = {
    type: "DELETE_PIZZAS",
};
export const removePizza = (id) => ({
    type: "REMOVE_PIZZAS",
    payload: id
});
export const plusPizza = (id) => ({
    type: "PLUS_PIZZAS",
    payload: id
});
export const minusPizza = (id) => ({
    type: "MINUS_PIZZAS",
    payload: id
});
