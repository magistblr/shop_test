import { IProductVariations } from './../../models/IProductVariations';
import { useAppSelector } from './../redux';
import { ProductCart } from './../../store/reducers/CartSlice';
import { useState, useEffect } from 'react';

export const useGetProductCart = (productVariationId: number, productId: number) => {
    const [productCart, setProductCart] = useState<ProductCart>();
    const [variation, setVariation] = useState<IProductVariations>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const product = useAppSelector(state => state.productReducer.products.find(item => item.id === productId))

    useEffect(() => {
        if (product) {
            const variation = product.variations.find(item => item.id === productVariationId)
            setVariation(variation)
        }
    }
    ), [productVariationId, productId];

    useEffect(() => {
        if (product && variation) {
            let productCart: ProductCart = {
                id: product.id,
                name: product.name,
                variation: {
                    price: variation.price,
                    stock: variation.stock,
                }
            }
            setProductCart(productCart)
        }
    }), [productVariationId, productId];
    return { productCart, isSuccess };
}
