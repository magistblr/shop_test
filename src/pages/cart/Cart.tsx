import { CartCardType } from 'components/common/cart_card/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { cartSlice } from 'store/reducers/CartSlice';
import { getCartProducts, getCartTotalPriceDiscount } from 'store/selectors/selectors';

import cartHeaderImg from '../../assets/img/cart_img.svg';
import { CartCard } from '../../components/common/cart_card/CartCard';
import { Button } from '../../components/custom/button/Button';

import s from './Cart.module.scss';

export const Cart: React.FC = () => {
  const cartTotalPriceDiscount = useAppSelector(getCartTotalPriceDiscount)
  const cartProducts = useAppSelector(getCartProducts)


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
                <div className={s.content_price}>
                  <p className={s.price_description}>Общая стоимость:</p>
                  <p className={s.price}>{cartTotalPriceDiscount} ₽</p>
                </div>
                <Link to="/delivery">
                  <Button>Оформить</Button>
                </Link>
              </div>
              <img src={cartHeaderImg} alt="cart_header_img" />
            </div>
            <div className={s.cart_cards_wrapper}>
              <div className={s.cart_cards}>
                {cartProducts && cartProducts.map((item: CartCardType) =>
                  <CartCard
                    key={item.id}
                    price={item.price}
                    stock={item.stock}
                    name={item.name}
                    id={item.id}
                    count={item.count}
                    totalPrice={item.totalPrice}
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



