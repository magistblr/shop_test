import { API } from 'services/apiService';
import { useState, useEffect } from 'react';
import { mathMinusPercent } from 'utils/mathsFunctions';

export const useGetPrice = (productId: number) => {
    const [price, setPrice] = useState<number>(0);
    const [newPrice, setNewPrice] = useState<number>(0);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const { data: variations, isSuccess: variationsSuccess } =
        API.useFetchProductAllVariationsQuery({
            filter: productId,
        })

    useEffect(() => {
        if (variationsSuccess) {
            const variationsPrice = [...variations]
            const price = variationsPrice.sort((a, b) => a.price - b.price)[0].price
            setPrice(price)
        }
    }), [variations];

    useEffect(() => {
        if (price) {
            const newPrice = mathMinusPercent(price, 10)
            setNewPrice(newPrice)
        }
    }), [price];

    useEffect(() => {
        if (variationsSuccess) {
            if (variations) {
                setIsSuccess(true)
            } else {
                setIsSuccess(false)
            }
        }
    }, [variations])

    return { price, newPrice, isSuccess };
}
