import { IProductVariationProperties } from './../../../../../models/IProductVariationProperties';

export type VariationCardType = {
  setOpenPopUp: (closePopUp: boolean) => void
  variationsProperties: IProductVariationProperties[]
  productVariationId: number
  id: number
}
