import styles from './Button.module.scss'

import { useContext } from 'react'

import { ProductsContextDispatch } from '@/context/ProductsProvider'
import { NavLink } from 'react-router'

const Button = (props) => {
  const {
    product
  } = props

  const {
    isInCart
  } = product


  const dispath = useContext(ProductsContextDispatch)

  const addInCart = (e) => {
    e.stopPropagation()
    dispath({
      type: 'changed',
      product: {
        ...product,
        isInCart: !isInCart,
      }
    })
  }

  let button = <button
    className={styles.button}
    onClick={addInCart}
  >В корзину</button>

  if (isInCart) {
    button = <NavLink className={styles.link} to='/cart'>В корзине</NavLink>
  }

  return (
    <>
      {button}
    </>
  )
}

export default Button