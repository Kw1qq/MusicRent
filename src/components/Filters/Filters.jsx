import { useEffect, useState } from 'react'
import styles from './Filters.module.scss'
import clsx from 'clsx'

const categories = ['Гитары', 'Бас-гитары', 'Синтезаторы', 'Флейты', 'Оборудование', 'Барабаны']
const brands = ['IBANEZ', 'ROCKDALE', 'YAMAHA', 'VESTON', 'CRAFTER', 'FENDER', 'Belucci', 'TERRIS', 'YARGO', 'KORG', 'TESLER', 'CASIO', 'Pearl', 'TAMA', 'MIYASHIRU', 'ROY', 'Artemis', 'BEHRINGER', 'Arturia']

const Filters = (props) => {
  const {
    setFilter
  } = props

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [cost, setCost] = useState({
    min: 0,
    max: 10000,
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  }

  const handleBrandsChange = (brand) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(c => c !== brand)
      } else {
        return [...prev, brand]
      }
    })
  }

  const handleCostChange = ({ target }) => {
    setCost({
      ...cost,
      [target.name]: target.value,
    })
  }

  useEffect(() => {
    setFilter({
      category: selectedCategories,
      brand: selectedBrands,
      cost: cost,
    })
  }, [selectedCategories, selectedBrands, cost])

  return (
    <form className={styles.filters}>
      <button
        className={clsx('visible-mobile', styles.button, isMenuOpen && styles.open)}
        type='button'
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      >
        <h3>Фильтры</h3>
      </button>
      <div className={clsx(styles.inner, isMenuOpen && styles.open)}>
        <div className={styles.section}>
          <h2>Категории</h2>
          <fieldset className={styles.fieldset}>
            {categories.sort().map(category => {
              return (
                <label key={category} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <p>{category}</p>
                </label>
              )
            })}
          </fieldset>
        </div>
        <div className={styles.section}>
          <h2>Бренды</h2>
          <fieldset className={styles.fieldset}>
            {brands.sort().map(brand => {
              return (
                <label key={brand} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandsChange(brand)}
                  />
                  <p>{brand}</p>
                </label>
              )
            })}
          </fieldset>
        </div>
        <div className={styles.section}>
          <h2>Цена</h2>
          <div className={styles.price}>
            <label>
              <p>От</p>
              <input type="number" name='min' value={cost.min} onChange={handleCostChange} className={styles.input} />
            </label>
            <label>
              <p>До</p>
              <input type="number" name='max' value={cost.max} onChange={handleCostChange} className={styles.input} />
            </label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Filters