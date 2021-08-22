import React from "react";

const Categories = ({ category, onClickItem, activeCategory }) => {
    const getActive = (index) => {
        onClickItem(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? "active" : ""}
                    onClick={() => getActive(null)}
                >
                    Все
                </li>
                {category &&
                    category.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => getActive(index)}
                                className={
                                    activeCategory === index ? "active" : ""
                                }
                            >
                                {item}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Categories;
