// import { CardsType } from "./cardsReducer";


export const AddToCart = () => ({ type: 'categories/ADD_TO_CART'} as const);

export type CategoriesActionTypes =
        | ReturnType<typeof AddToCart>
