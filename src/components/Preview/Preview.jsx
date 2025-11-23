import { useContext } from 'react'
import Card from '@/components/Card'
import styles from './Preview.module.scss'

import { ProductsContext } from '@/context/ProductsProvider'
import List from '@/components/List'

const Preview = () => {
  const products = useContext(ProductsContext)
  const filteredProducts = products.filter((product, index) => {
    return !product.oldPrice
  }).slice(0, 10)
  
  return (
    <section className={styles.preview}>
      <div className='container'>
        <h2>
          Популярные инструменты
        </h2>
        <List>
          {filteredProducts.map(product => {
            return (
              <li key={product.id}>
                <Card product={product} />
              </li>
            )
          })}
        </List>
      </div>
    </section>
  )
}


export default Preview