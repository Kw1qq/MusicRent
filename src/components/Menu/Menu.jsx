import { NavLink } from 'react-router'
import clsx from 'clsx'

import styles from './Menu.module.scss'
import Cart from '@/assets/images/icons/cart.svg'
import Favourites from '@/assets/images/icons/favourites.svg'
import User from '@/assets/images/icons/user.svg'
import CatalogButton from '../CatalogButton'

const Menu = (props) => {
  const {
    isOpen,
    onHandleClickOpenMenu
  } = props

  return (
    <nav
      className={clsx(styles.menu, isOpen && styles.open)}
      onClick={(e) => {
        if(isOpen) {
          onHandleClickOpenMenu(false)
        }
      }}
    >
      <ul className={clsx(styles.list, isOpen && styles.open)}>
        <li>
          <NavLink to="/cart" className={styles.item}>
            <img src={Cart} alt="" width={26} height={26} />
            <p>Корзина</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourites" className={styles.item}>
            <img src={Favourites} alt="" width={26} height={26} />
            <p>Избранное</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={styles.item}>
            <img src={User} alt="" width={26} height={26} />
            <p>Войти</p>
          </NavLink>
        </li>
        <li className={styles.button}>
          <CatalogButton />
        </li>
      </ul>
    </nav>
  )
}

export default Menu