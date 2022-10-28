export type TagType = {
  children: React.ReactNode;
  id: number
  type: string
  callback: (id: number) => void
  idCategory?: number
};
