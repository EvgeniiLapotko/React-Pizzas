export const setLoaded = (val) => ({
    type: "SET_LOADED",
    payload: val,
});

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
    dispatch(setLoaded(false));
    console.log(category, sortBy);
    const resolve = await fetch(
        `https://612299d2d4462800170548e6.mockapi.io/pizzas?category=${
            category === null ? "" : category
        }&sortby=${sortBy}&order=desc`
    );

    const data = await resolve.json();

    dispatch(setPizzas(data));
};

export const setPizzas = (items) => {
    return { type: "SET_PIZZAS", payload: items };
};
