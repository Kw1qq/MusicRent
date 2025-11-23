import clsx from 'clsx'
import styles from './Header.module.scss'

import Logo from '@/assets/images/icons/logo-black.svg'

import CatalogButton from '../CatalogButton'
import SearchForm from '../SearchForm'
import Menu from '../Menu'
import BurgerButton from '../BurgerButton'
import { NavLink } from 'react-router'

const Header = (props) => {
  const {
    onHandleClickOpenMenu,
  } = props

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.group}>
          <NavLink to="/">
            <img src={Logo} alt="логотип" width={115} height={80} className={styles.logo} />
          </NavLink>
          <CatalogButton />
        </div>
        <SearchForm />
        <Menu />
        <BurgerButton onClick={onHandleClickOpenMenu}/>
      </div>
    </header>
  )
}

export default Header