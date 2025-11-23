import { useContext } from 'react'

import styles from './Checkbox.module.scss'

import { CartContextDispatch } from '@/context/CartProvider'

const Checkbox = (props) => {
  const {
    id,
    isSelected,
    htmlId,
    products
  } = props

  const setProducts = useContext(CartContextDispatch)

  const onHandleClick = () => {
    setProducts(currentProducts => {
      return currentProducts.map(product => {
        if (products) {
          return {
            ...product,
            isSelected: !isSelected
          }
        }
        if (product.id === id) {
          return {
            ...product,
            isSelected: !product.isSelected
          }
        }
        return product
      })
    }
    )
  }

  return (
    <input type="checkbox"
      className={styles.checkbox}
      checked={isSelected}
      onChange={onHandleClick}
      id={htmlId}
    />
  )
}

export default Checkbox