import { CategoriesActionTypes } from '../actions';

export type cardType = {

}

export type CardsType = cardType[]

export type initialStateType = {
}

const initialState: initialStateType = {
  
};



export const categoriesReducer = (state: initialStateType = initialState, action: CategoriesActionTypes): initialStateType => {
    switch (action.type) {
        case 'categories/ADD_TO_CART':
            return {}
        default:
            return state;
    }
};

