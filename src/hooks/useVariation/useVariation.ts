import { API } from 'services/apiService';
import { useState, useEffect } from 'react';


//TODO
export const useVariation = (productVariationId: number, productVariationPropertyId: number, productVariationPropertyListValueId: number) => {
    const [packageProduct, setPackageProduct] = useState('');
    // const [wide, setWide] = useState(null);
    // const [length, setLength] = useState(null);
    // const [height, setHeight] = useState(null);
    // const [weight, setWeight] = useState(null);
    // const [size, setSize] = useState(null);
    // const [color, setColor] = useState(null);

    useEffect(() => {
        const { data: variationsValues, isSuccess: variationsValuesSuccess } = API.useFetchProductVariationPropertyValuesQuery('');
        // function addVariationsState(data: IProductVariationPropertyValues[]) {
        //     const filteredVariationsValues = data.filter(item => item.product_variation_id === productVariationId)
        //     const packageProduct = filteredVariationsValues.filter(item => item.value_string)[0].value_string
        //     console.log(packageProduct);
        //     if (packageProduct) {
        //         return setPackageProduct(packageProduct)
        //     }
        // }

        if (variationsValuesSuccess) {
            const fr = variationsValues.find(item => item.value_string)
            if (fr?.value_string) { setPackageProduct(fr.value_string) }

        }

        return () => {

        };
    });
    return packageProduct;
}
