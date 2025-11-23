import { useContext } from 'react'
import { CartContextDispatch } from '@/context/CartProvider'

import styles from './Counter.module.scss'

const Counter = (props) => {
  const {
    count,
    id
  } = props

  const setProducts = useContext(CartContextDispatch)

  const onHandleClickCounter = (isFold) => {
    if (!isFold && count - 1 === 0) {
      return
    }
    if (isFold && count + 1 === 8) {
      return
    }

    setProducts(products => {
      return products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            count: isFold ? count + 1 : count - 1,
          }
        }
        return product
      })
    })
  }

  return (
    <span className={styles.counter}>
      <button
        onClick={() => { onHandleClickCounter(false) }}
        className={styles.button}
      >
        -
      </button>
      <p 
      className={styles.count}
      >{count}</p>
      <button
        onClick={() => { onHandleClickCounter(true) }}
        className={styles.button}
      >
        +
      </button>
    </span>
  )
}

export default Counter