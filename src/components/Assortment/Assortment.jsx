import { useContext, useState } from 'react'
import styles from './Assortment.module.scss'

import { ProductsContext } from '@/context/ProductsProvider'

import Filters from '@/components/Filters'
import Card from '@/components/Card'
import List from '@/components/List'

const Assortment = (props) => {
  const {
    search
  } = props

  const products = useContext(ProductsContext)

  const [filter, setFilter] = useState({
    category: [],
    brand: [],
    cost: {
      min: 0,
      max: 10000,
    },
    search,
  })

  const filteredProducts = products?.filter(product => {
    if (product.category.toLowerCase() === search?.toLowerCase()) {
      return product.category.toLowerCase() === search.toLowerCase()
    }
    if (search) {
      return product.title.toLowerCase().includes(search)
    }
    return (filter.category.length === 0 || filter.category.includes(product.category)) &&
      (filter.brand.length === 0 || filter.brand.includes(product.brand)) &&
      (filter.cost.min <= product.price && product.price <= filter.cost.max)
  }) ?? []

  return (
    <section className={styles.assortment}>
      <div className="container">
        <h1>Каталог</h1>
        <div className={styles.wrapper}>
          <Filters setFilter={setFilter} />
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
      </div>
    </section>
  )
}

export default Assortment