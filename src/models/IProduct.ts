import { IProductVariations } from './IProductVariations'

export interface IProduct {
  id: number
  name: string
  category_id: number
  description: string
  variations: IProductVariations[]
}
