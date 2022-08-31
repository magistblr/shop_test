import { IProductVariations } from './../../models/IProductVariations';
import { useAppSelector, useAppDispatch } from './../redux';
import { ProductCart } from './../../store/reducers/CartSlice';
import { useState, useEffect } from 'react';

export const useGetProductCart = (productVariationId: number, productId: number) => {
    const [productCart, setProductCart] = useState<any>();
    const [variation, setVariation] = useState<IProductVariations>();

    const product = useAppSelector(state => state.productReducer.products.find(item => item.id === productId))

    useEffect(() => {
        if (product) {
            const variation = product.variations.find(item => item.id === productVariationId)
            setProductCart(product)
            setVariation(variation)
        }
    }
    ), [];
    return { variation, productCart };
}
