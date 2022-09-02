
export const getAllProducts = (state: any) => state.productReducer.products

export const getMinRangeProduct = (state: any) => state.productReducer.minRangeProduct

export const getMaxRangeProduct = (state: any) => state.productReducer.maxRangeProduct

export const getSortProducts = (state: any) => state.productReducer.sort

export const getIdCategory = (state: any) => state.categoryReducer.id

export const getIdCartProductVariation = (state: any) => state.cartReducer.id

export const getIdProduct = (state: any) => state.productReducer.id
//TODO
// export const getProduct = state => state.productReducer.products.filter(item => item.id === id ? item : "")[0]