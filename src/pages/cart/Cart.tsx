import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart';
import React, { useEffect, useState } from 'react';
import { cartSlice } from 'store/reducers/CartSlice';
import { mathMinusPercent } from 'utils/mathsFunctions';

import cartHeaderImg from '../../assets/img/cart_img.svg';
import { CartCard } from '../../components/common/cart_card/CartCard';
import { Button } from '../../components/custom/button/Button';

import s from './Cart.module.scss';

export const Cart: React.FC = () => {
  const cartTotalPrice = useAppSelector(state => state.cartReducer.totalPrice)
  const id = useAppSelector(state => state.cartReducer.id)
  const productId = useAppSelector(state => state.productReducer.id)
  const cartProducts = useAppSelector(state => state.cartReducer.productVariations)


  const dispatch = useAppDispatch()

  const handlerRemoveAllProductsCart = () => {
    dispatch(cartSlice.actions.allProductsRemove())
  }

  return (
    <>
      {cartProducts.length !== 0 ?
        < div className={s.wrapper} >
          <div className={s.header_cart}>
            <h2>Корзина</h2>
            <div className={s.cart_clear} onClick={() => handlerRemoveAllProductsCart()}>Очистить корзину</div>
          </div>
          <div className={s.content_wrapper}>
            <div className={s.content_header}>
              <div className={s.header}>
                <h3>Xiaomi</h3>
                <div className={s.content_price}>
                  <p className={s.price_description}>Стоимость корзины:</p>
                  <p className={s.price}>{mathMinusPercent(cartTotalPrice, 10)}₽</p>
                </div>
                <Button>Оформить</Button>
              </div>
              <img src={cartHeaderImg} alt="cart_header_img" />
            </div>
            <div className={s.cart_cards_wrapper}>
              <div className={s.cart_cards}>
                {cartProducts && cartProducts.map(item =>
                  <CartCard
                    key={item.id}
                    price={item.price}
                    stock={item.stock}
                    name={item.name}
                    id={item.id}
                  />
                )
                }
              </div>
            </div>
          </div>
        </div>
        : <div className={s.wrapper_clear_cart}>Корзина пуста</div>
      }
    </>

  )
}



