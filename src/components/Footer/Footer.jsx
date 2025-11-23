import clsx from 'clsx'
import styles from './Footer.module.scss'

import Logo from '@/assets/images/icons/logo-light.svg'
import Twitter from '@/assets/images/icons/twitter.svg'
import Instagram from '@/assets/images/icons/instagram.svg'
import Youtube from '@/assets/images/icons/youtube.svg'
import Facebook from '@/assets/images/icons/facebook.svg'
import { NavLink } from 'react-router'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.top}>
          <div className={styles.group}>
            <NavLink to="/">
              <img src={Logo} alt="" width={125} height={80} />
            </NavLink>
            <p>Аренда музыкальных инструментов</p>
          </div>
          <div className={styles.group}>
            <h4 className={styles.title}>Категории</h4>
            <ul className={styles.list}>
              <li className={styles.list}>
                <NavLink to="/catalog/гитары" className={styles.link}>
                  Гитары
                </NavLink>
              </li>
              <li className={styles.list}>
                <NavLink to="/catalog/барабаны" className={styles.link}>
                  Барабаны
                </NavLink>
              </li>
              <li className={styles.list}>
                <NavLink to="/catalog/флейты" className={styles.link}>
                  Флейты
                </NavLink>
              </li>
              <li className={styles.list}>
                <NavLink to="/catalog/бас-гитары" className={styles.link}>
                  Бас-гитары
                </NavLink>
              </li>
              <li className={styles.list}>
                <NavLink to="/catalog/синтезаторы" className={styles.link}>
                  Синтезаторы
                </NavLink>
              </li>
              <li className={styles.list}>
                <NavLink to="/catalog/оборудование" className={styles.link}>
                  Оборудование
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <h4 className={styles.title}>Информация</h4>
            <ul className={styles.list}>
              <li className={styles.list}>
                <a href="№" className={styles.link}>
                  О нас
                </a>
              </li>
              <li className={styles.list}>
                <a href="№" className={styles.link}>
                  Контакты
                </a>
              </li>
              <li className={styles.list}>
                <a href="№" className={styles.link}>
                  Политика конфиденциальности
                </a>
              </li>
              <li className={styles.list}>
                <a href="№" className={styles.link}>
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <h4 className={styles.title}>Социальные сети</h4>
            <ul className={styles.list}>
              <li className={styles.list}>
                <div className={styles.logotypes}>
                  <a className={styles.logotype}>
                    <img src={Twitter} alt="" />
                  </a>
                  <a className={styles.logotype}>
                    <img src={Youtube} alt="" />
                  </a>
                  <a className={styles.logotype}>
                    <img src={Facebook} alt="" />
                  </a>
                  <a className={styles.logotype}>
                    <img src={Instagram} alt="" />
                  </a>
                </div>
              </li>
              <li className={styles.list}>
                <p>
                  Подпишитесь на нас, чтобы не пропустить новые акции!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2025 MusicRent. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer