
export const getAllProducts = state => state.productReducer.products

export const getMinRangeProduct = state => state.productReducer.minRangeProduct

export const getMaxRangeProduct = state => state.productReducer.maxRangeProduct

export const getSortProducts = state => state.productReducer.sort

export const getIdCategory = state => state.categoryReducer.id

export const getIdCartProductVariation = state => state.cartReducer.id

export const getIdProduct = state => state.productReducer.id
//TODO
// export const getProduct = state => state.productReducer.products.filter(item => item.id === id ? item : "")[0]