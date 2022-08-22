export interface IProductVariations {
  id: number
  price: number
  product_id: number
  stock: number
  valuesList: IProductVariationsValues[]
}

export interface IProductVariationsValues {
  packageProduct: string
  color: string
  size: string
  wide: number
  height: number
  weight: number
  length: number
}