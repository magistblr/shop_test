import { IProductImage } from '../../../../../models/IProductImage'
import { IProductVariations } from '../../../../../models/IProductVariations'

export type CardType = {
  id: number
  type?: 'green' | 'blue' | 'yellow' | 'pink' | 'outlined'
  callback?: (id: number) => void
  description: string
  categoryId: number
  productId: number
  variations: IProductVariations[]
}
