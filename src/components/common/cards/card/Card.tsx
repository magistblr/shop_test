import React, { useEffect, useState } from 'react'

import s from './Card.module.scss'
import { CardType } from './types'

import { Popup } from 'components/common/popup'
import { Button } from 'components/custom/button/Button'
import Carousel from 'components/custom/carousel/Carousel'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { API } from 'services/apiService'
import { Variations } from 'components/common/variations/Variations'
import { productSlice } from 'store/reducers/ProductSlice'
import { useGetPrice } from 'hooks/useGetPrice/useGetPrice'
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart'
import { cartSlice } from 'store/reducers/CartSlice'

export const Card: React.FC<CardType> = React.memo(({ description, productId }) => {
  const [openPopUp, setOpenPopUp] = useState(false)
  const products = useAppSelector(state => state.productReducer.products)
  const id = useAppSelector(state => state.cartReducer.id)
  const productIdState = useAppSelector(state => state.productReducer.id)

  const foo = (productId: number) => {
    dispatch(productSlice.actions.productsId(productId))
    setOpenPopUp(true)
  }


  const dispatch = useAppDispatch()
  //fetch images
  const { data: imageApi } = API.useFetchSortRangeFilterProductsImageQuery({
    filter: productId || '',
  })
  //fetch variations
  const { data: variationApi, isSuccess: variationSuccess } =
    API.useFetchProductAllVariationsQuery({
      filter: productId,
    })
  //add variations to store
  useEffect(() => {
    if (variationSuccess) {
      dispatch(productSlice.actions.variationsFetchingSuccess([variationApi, productId]))
    }
  }, [variationApi])
  // const { productCart, variation } = useGetProductCart(id, productIdState)

  // useEffect(() => {
  //   if (productCart && variation) {
  //     debugger
  //     if (productId === productIdState) {
  //       dispatch(cartSlice.actions.productVariationsAdd(
  //         {
  //           id: productCart.id,
  //           name: productCart.name,
  //           price: variation.price,
  //           stock: variation.stock
  //         }
  //       ))
  //     }
  //   }
  // }, [productCart, variation])

  const { price, newPrice, isSuccess: priceIsSuccess } = useGetPrice(productId)

  //TODO

  const image1 = imageApi && `https://test2.sionic.ru/${imageApi[0].image_url}`
  const image2 = imageApi && `https://test2.sionic.ru/${imageApi[1].image_url}`
  const image3 = imageApi && `https://test2.sionic.ru/${imageApi[2].image_url}`
  return (
    <>
      {openPopUp && (
        <div className={s.wrapper__popup}>
          <Popup setOpenPopup={setOpenPopUp}>
            {variationSuccess && <Variations setOpenPopUp={setOpenPopUp} variations={variationApi} productId={productId} id={id} />}
          </Popup>
        </div>
      )}
      {products &&
        <div className={s.wrapper}>
          <Carousel show={1}>
            <img src={image1} alt="card" className={s.card__img} />
            <img src={image2} alt="card" className={s.card__img} />
            <img src={image3} alt="card" className={s.card__img} />
          </Carousel>
          <div className={s.card__tags} />
          <div className={s.card__content}>
            <p className={s.content__text}>{description}</p>
            <div className={s.content__price}>от {newPrice && newPrice} ₽</div>
            <div className={s.content__oldPrice}>
              {price && price} ₽<span className={s.content__discount}>-10%</span>
            </div>
          </div>
          <Button block outlined callback={() => foo(productId)}>
            Добавить в корзину
          </Button>
        </div>
      }
    </>
  )
})
