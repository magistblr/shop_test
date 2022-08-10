/* eslint-disable no-param-reassign */
export const mathMinusPercent = (price: number, discount: number) => {
    const percent = price / 100 * discount
    return Math.ceil(price - percent)
}
