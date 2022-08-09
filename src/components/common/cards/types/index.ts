export type TagType = {
  active?: boolean
  id: number
  type?: 'green' | 'blue' | 'yellow' | 'pink' | 'outlined'
  callback: (id:number) => void
};
