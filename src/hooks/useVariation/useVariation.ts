import { IProductVariationPropertyValues } from './../../models/IProductVariationPropertyValues';
import { API } from 'services/apiService';
import { useState, useEffect } from 'react';


//TODO
export const useVariation = (productVariationId: number, productVariationPropertyId: number, productVariationPropertyListValueId: number) => {
    const [packageProduct, setPackageProduct] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [wide, setWide] = useState<number>(0);
    const [length, setLength] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [sizeId, setSizeId] = useState<number>(0);
    const [colorId, setColorId] = useState<number>(0);

    const { data: variationsPropertyValues, isSuccess: variationsValuesSuccess } = API.useFetchProductVariationPropertyValuesQuery({
        filter: productVariationId
    });

    useEffect(() => {
        if (variationsValuesSuccess) {
            if (variationsPropertyValues[5].product_variation_property_list_value_id) {
                setSizeId(variationsPropertyValues[5].product_variation_property_list_value_id)
            }
            if (variationsPropertyValues[6].product_variation_property_id) {
                setColorId(variationsPropertyValues[5].product_variation_property_id)
            }
        }
    }, [sizeId, colorId])

    useEffect(() => {
        if (variationsValuesSuccess) {
            if (variationsPropertyValues[0].value_string) {
                setPackageProduct(variationsPropertyValues[0].value_string)
            }
            if (variationsPropertyValues[1].value_int) {
                setWide(variationsPropertyValues[1].value_int)
            }
            if (variationsPropertyValues[2].value_int) {
                setLength(variationsPropertyValues[2].value_int)
            }
            if (variationsPropertyValues[3].value_int) {
                setHeight(variationsPropertyValues[3].value_int)
            }
            if (variationsPropertyValues[4].value_float) {
                setWeight(variationsPropertyValues[4].value_float)
            }
            if (variationListValuesSizeSuccess) {
                setSize(variationListValuesSize.value)
            }
            if (variationListValuesColorSuccess) {
                setColor(variationListValuesColor.value)
            }
        }
    });

    const { data: variationListValuesSize, isSuccess: variationListValuesSizeSuccess } = API.useFetchProductVariationListValuesQuery(sizeId);
    const { data: variationListValuesColor, isSuccess: variationListValuesColorSuccess } = API.useFetchProductVariationListValuesQuery(colorId);
    console.log(variationListValuesColor);
    return { packageProduct, color, height, length, size, weight, wide };
}
