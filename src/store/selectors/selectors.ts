//ProductsReducer
export const getAllProducts = (state: any) => state.productReducer.products
export const getMinRangeProduct = (state: any) => state.productReducer.minRangeProduct
export const getMaxRangeProduct = (state: any) => state.productReducer.maxRangeProduct
export const getSortProducts = (state: any) => state.productReducer.sort
export const getIdCategory = (state: any) => state.categoryReducer.id
export const getIdCartProductVariation = (state: any) => state.cartReducer.id
export const getIdProduct = (state: any) => state.productReducer.id


//CartReducer
export const getCartTotalPrice = (state: any) => state.cartReducer.totalPrice
export const getCartProducts = (state: any) => state.cartReducer.productVariations
export const getCartTotalPriceDiscount = (state: any) => state.cartReducer.totalPriceDiscount
export const getCartTotal = (state: any) => state.cartReducer.totalPriceDiscount
export const getProductsCount = (state: any) => state.cartReducer.productsCount


//TODO
// export const getProduct = state => state.productReducer.products.filter(item => item.id === id ? item : "")[0]