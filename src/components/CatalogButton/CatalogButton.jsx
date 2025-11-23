import { NavLink } from 'react-router'
import styles from './CatalogButton.module.scss'

import BurgerButton from '@/assets/images/icons/burger-button.svg'

const CatalogButton = () => {

  return (
    <NavLink to="/catalog" >
      <button className={styles.button}>
        <img src={BurgerButton} alt="Каталог" width={26} height={26} />
        <span>Каталог</span>
      </button>
    </NavLink>
  )
}

export default CatalogButton