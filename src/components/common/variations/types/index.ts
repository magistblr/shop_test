import { IProductVariations } from './../../../../models/IProductVariations';
import { Dispatch, SetStateAction } from "react"

export type VariationsType = {
    setOpenPopUp: Dispatch<SetStateAction<boolean>>
    variations: IProductVariations[]
    productId: number
    id: number
}
