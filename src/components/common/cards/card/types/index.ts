export type CardType = {
    id:number
    type?: 'green' | 'blue' | 'yellow' | 'pink' | 'outlined'
    callback?: (id: number) => void
    description: string
    categoryId: number
};