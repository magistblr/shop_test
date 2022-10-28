import React, { useEffect, useState } from 'react'

import s from './Card.module.scss'
import { CardType } from './types'

import { Button } from 'components/custom/button/Button'
import Carousel from 'components/custom/carousel/Carousel'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { API } from 'services/apiService'
import { Variations } from 'components/common/variations/Variations'
import { productSlice } from 'store/reducers/ProductSlice'
import { useGetPrice } from 'hooks/useGetPrice/useGetPrice'
import { getAllProducts } from 'store/selectors/selectors'
import { Popup } from 'components/common/popup'

export const Card: React.FC<CardType> = React.memo(({ description, productId }) => {
  const [openPopUp, setOpenPopUp] = useState(false)

  const products = useAppSelector(getAllProducts)

  const productsDisable = useAppSelector(state => state.productReducer.products.find(item => item.id === productId)?.inCart)
  const productsDisableInCart = useAppSelector(state => state.cartReducer.productVariations.find(item => item.productId === productId)?.inCart)

  const dispatch = useAppDispatch()
  //fetch images
  const { data: imageApi } = API.useFetchSortRangeFilterProductsImageQuery({
    filter: productId || '',
  })

  const btnHandler = (productId: number) => {
    dispatch(productSlice.actions.variationsAdd([]))
    dispatch(productSlice.actions.productsId(productId))
    setOpenPopUp(true)
  }

  const { price, newPrice, isSuccess: priceIsSuccess } = useGetPrice(productId)

  const image1 = imageApi && `https://test2.sionic.ru/${imageApi[0].image_url}`
  const image2 = imageApi && `https://test2.sionic.ru/${imageApi[1].image_url}`
  const image3 = imageApi && `https://test2.sionic.ru/${imageApi[2].image_url}`

  return (
    <>
      {openPopUp && (
        <div className={s.wrapper__popup}>
          <Popup openPopup={openPopUp} setOpenPopup={setOpenPopUp} component={<Variations setOpenPopUp={setOpenPopUp} productId={productId} />} />
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
          <Button disabled={productsDisable || productsDisableInCart} block outlined callback={() => btnHandler(productId)}>
            {productsDisable || productsDisableInCart ? `Добавлено` : `Добавить в корзину`}
          </Button>
        </div>
      }
    </>
  )
})
