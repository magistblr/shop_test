import { IProductImage } from '../../../../../models/IProductImage'
import { IProductVariations } from '../../../../../models/IProductVariations'

export type CardType = {
  children: React.ReactNode;
  id: number
  type?: 'green' | 'blue' | 'yellow' | 'pink' | 'outlined'
  callback?: (id: number) => void
  description: string
  categoryId: number
  productId: number
  inCart: boolean
}
