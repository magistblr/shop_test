import { IProductVariationProperties } from './../../../../../models/IProductVariationProperties';

export type VariationCardType = {
  setOpenPopUp: (closePopUp: boolean) => void
  variationsProperties: IProductVariationProperties[]
  productVariationId: number
  productId: number
  callback: (id: number) => void
}
