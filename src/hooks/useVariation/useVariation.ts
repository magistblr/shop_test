import { IProductVariationsValues } from './../../models/IProductVariations';
import { IProductVariationPropertyValues } from './../../models/IProductVariationPropertyValues';
import { API } from 'services/apiService';
import { useState, useEffect } from 'react';

type ValuesType = (string | number | boolean)[]

export const useFetchVariation = (productVariationId: number, fetch: boolean) => {
    const [packageProduct, setPackageProduct] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [wide, setWide] = useState<number>(0);
    const [length, setLength] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [sizeId, setSizeId] = useState<number>(0);
    const [colorId, setColorId] = useState<number>(0);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [valuesArr, setValuesArr] = useState<ValuesType>([packageProduct, color, height, length, size, weight, wide]);
    const [valuesObj, setValuesObj] = useState<IProductVariationsValues>({ packageProduct, color, height, length, size, weight, wide });

    const { data: variationsPropertyValues, isSuccess: variationsValuesSuccess, refetch: valuesFetch } = API.useFetchProductVariationPropertyValuesQuery({
        filter: productVariationId
    });
    const { data: variationListValuesSize, isSuccess: variationListValuesSizeSuccess, refetch: sizeIdRefetch } = API.useFetchProductVariationListValuesQuery(sizeId);
    const { data: variationListValuesColor, isSuccess: variationListValuesColorSuccess, refetch: colorIdRefetch } = API.useFetchProductVariationListValuesQuery(colorId)

    useEffect(() => {
        sizeIdRefetch()
        colorIdRefetch()
        valuesFetch()
    }, [fetch])
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
                setSize(variationListValuesSize.title)
            }
            if (variationListValuesColorSuccess) {
                setColor(variationListValuesColor.title)
            }
        }
    }), [variationListValuesSizeSuccess, variationListValuesColorSuccess, variationsValuesSuccess];

    useEffect(() => {
        if (variationsValuesSuccess) {
            if (variationsPropertyValues[5].product_variation_property_list_value_id) {
                setSizeId(variationsPropertyValues[5].product_variation_property_list_value_id)
            }
            if (variationsPropertyValues[6].product_variation_property_id) {
                setColorId(variationsPropertyValues[5].product_variation_property_id)
            }
        }
    }, [variationsValuesSuccess])

    useEffect(() => {
        if (variationsValuesSuccess) {
            if (packageProduct && color && size && wide && length && height && weight) {
                setIsSuccess(true)
            } else {
                setIsSuccess(false)
            }
        }
    }, [packageProduct, color, size, wide, length, height, weight])

    useEffect(() => {
        setValuesArr([packageProduct, color, height, length, size, weight, wide])
        setValuesObj({ packageProduct, color, height, length, size, weight, wide })
    }, [isSuccess])

    return { valuesArr, valuesObj, isSuccess };
}
