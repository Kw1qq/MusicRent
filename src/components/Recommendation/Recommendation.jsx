import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/context/ProductsProvider'

import styles from './Recommendation.module.scss'

import Card from '@/components/Card'
import List from '@/components/List'

const Recommendation = () => {
  const products = useContext(ProductsContext)
  const randomIndex = getRandomNumbers(0, products.length, 6)
  const filteredProducts = products.filter((product, index) => {
    return randomIndex.includes(index)
  })

  const [randomProducts, setRandomProducts] = useState(shuffleArray(filteredProducts))
  useEffect(() => {
    setRandomProducts(products.filter(product => randomProducts.find(pr => pr.id === product.id)))
  }, [products])

  return (
    <section className={styles.preview}>
      <div className='container'>
        <h2>
          Рекомендуем
        </h2>
        <List>
          {randomProducts.map(product => {
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

export default Recommendation

function getRandomNumbers(min, max, length) {
  const numbers = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }

  return numbers;
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}