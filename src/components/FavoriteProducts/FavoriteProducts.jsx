import { useContext } from 'react'
import styles from './FavoriteProducts.module.scss'
import { ProductsContext } from '@/context/ProductsProvider'
import Card from '@/components/Card'
import List from '@/components/List'

const FavoriteProducts = () => {
  const products = useContext(ProductsContext)

  const favoriteProducts = products.filter(product => product.isFavourite)

  const isListEmpty = favoriteProducts.length === 0

  return (
    <section className={styles.favorite} >
      <div className='container'>
        <h1>Избранное</h1>
        <div>
          {isListEmpty && <p className={styles.message}>
            В Избранном пока нет товаров
          </p>}

          {isListEmpty || <List>
            {favoriteProducts.map(product => {
              return (
                <li key={product.id}>
                  <Card product={product} />
                </li>
              )
            })}
          </List>}
        </div>
      </div>
    </section>
  )
}

export default FavoriteProducts