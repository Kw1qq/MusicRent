import { useContext } from 'react'

import styles from './Sales.module.scss'

import { ProductsContext } from '@/context/ProductsProvider'
import List from '@/components/List'
import Card from '@/components/Card'

const Sales = () => {
  const products = useContext(ProductsContext)
  const filteredProducts = products.filter((product, index) => {
    return product.oldPrice
  }).slice(0, 8)

  return (
    <section className={styles.sales}>
      <div className='container'>
        <h2>
          Акции
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

export default Sales