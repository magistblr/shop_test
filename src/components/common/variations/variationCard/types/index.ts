import { IProductVariationProperties } from './../../../../../models/IProductVariationProperties';

export type VariationCardType = {
  setOpenPopUp: (closePopUp: boolean) => void
  variationsProperties: IProductVariationProperties[]
  productVariationId: number
  callback: (num: number, inCart: boolean, count: number) => void
  disable: boolean
}
