export type TagType = {
  id: number
  type: string
  callback: (id: number) => void
  idCategory?: number
};
