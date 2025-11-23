import styles from './CartProducts.module.scss'

import { useContext } from 'react'
import { CartContext } from '@/context/CartProvider'
import CardInCart from '@/components/CardInCart'
import Checkbox from '../Checkbox/Checkbox'

const CartProducts = () => {
  const products = useContext(CartContext)

  const isEmptyFilteredProducts = products?.length === 0
  const selectAll = products?.reduce((acc, product) => product.isSelected && acc, true)
  const select = products.filter(product => product.isSelected)
  const cost = select.reduce((acc, product) => product.count * (product.oldPrice ?? product.price) + acc, 0)
  const sale = select.reduce((acc, product) => product.count * Math.abs((product.oldPrice - product.price ? product.oldPrice : 0) ) + acc, 0)

  return (
    <section className={styles.cart}>
      <div className='container'>
        <h1>Корзина</h1>
        {isEmptyFilteredProducts &&
          <p className={styles.message}>
            В Корзине пока нет товаров
          </p>
        }
        {isEmptyFilteredProducts ||
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.checkbox}>
                <Checkbox htmlId="checkbox" products={products} isSelected={selectAll} />
                <label htmlFor="checkbox">Выбрать все</label>
              </div>
              <ul className={styles.list}>
                {products?.map(product => {
                  return (
                    <li key={product.id} >
                      <CardInCart product={product} />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.sidebar}>
              {select.length === 0 ?
                <p>Выберите товар</p> :
                <>
                  <h3 className={styles.title}>Ваш заказ</h3>
                  <div className={styles.info}>
                    <div className={styles.item}>
                      <p>{select.length} товар{select.length > 1 && 'а'}</p>
                      <p>{cost} р.</p>
                    </div>
                    <div className={styles.item}>
                      <p>Скидка по акциям</p>
                      <p className={styles.sales}>- {sale} p.</p>
                    </div>
                    <div className={styles.item}>
                      <p className={styles.result}>Итого</p>
                      <p className={styles.result}>{cost - sale} р.</p>
                    </div>
                  </div>
                  <button className={styles.button}>
                    Перейти к оформлению
                  </button>
                </>
              }
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default CartProducts