export const sortBy = (sortBy) => {
    return { type: "SORT_BY", payload: sortBy };
};

export const setCategory = (catIndex) => {
    return { type: "SET_CATEGORY", payload: catIndex };
};
