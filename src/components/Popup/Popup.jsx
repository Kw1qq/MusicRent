import styles from './Popup.module.scss'
import clsx from 'clsx'

import Cart from '@/assets/images/icons/cart.svg'
import Favourites from '@/assets/images/icons/favourites.svg'
import User from '@/assets/images/icons/user.svg'
import CatalogButton from '../CatalogButton'
import { NavLink } from 'react-router'

const Popup = (props) => {
  const {
    onHandleClickOpenMenu,
    isOpen,
  } = props

  return (
    <div
      className={clsx(styles.menu, isOpen && styles.open)}
      onClick={(e) => {
        onHandleClickOpenMenu(false)
      }}
    >
      <ul
        className={clsx(styles.list, isOpen && styles.open)}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <li className={styles.button}>
          <CatalogButton />
        </li>
        <li>
          <NavLink to='/cart' className={styles.item}>
            <img src={Cart} alt="" width={26} height={26} />
            <p>Корзина</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/favourites' className={styles.item}>
            <img src={Favourites} alt="" width={26} height={26} />
            <p>Избранное</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/user' className={styles.item}>
            <img src={User} alt="" width={26} height={26} />
            <p>Войти</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Popup