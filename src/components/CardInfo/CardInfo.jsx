import { useRef, useState } from 'react'
import Gallery from '../Gallery/Gallery'
import styles from './CardInfo.module.scss'

import Button from '@/components/Button'
import FavouriteButton from '@/components/FavouriteButton'
import clsx from 'clsx'

const CardInfo = (props) => {
  const {
    product
  } = props

  const {
    title,
    imgSrc,
    images,
    params,
    price,
    specifications
  } = product

  const [open, setOpen] = useState('specifications')
  const myRef = useRef(null)

  const list = <ul className={styles.list}>
    {params.map((param, i) => {
      return (
        <li key={i}>
          <p>{param}</p>
        </li>
      )
    })}
  </ul>

  const shortList = <ul className={styles.list}>
    {params.slice(0, 3).map((param, i) => {
      return (
        <li key={i}>
          <p>{param}</p>
        </li>
      )
    })}
  </ul>

  const Scroll = () => {
    setOpen('params')
    window.scrollTo({
      top: myRef.current.offsetTop - 100,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <section className={styles.cardinfo}>
      <div className='container'>
        <span className={styles.title}>
          <h1>{title}</h1>
          <FavouriteButton product={product} />
        </span>
        <div className={styles.top}>
          <Gallery images={images} />
          <div className={styles.features}>
            <div>
              <h2>Характеристики</h2>
              {shortList}
              <button
                onClick={() => Scroll()}
                className={styles.link}
              >
                Подробнее
              </button>
            </div>
            <div className={styles.action}>
              <span className={styles.price}>
                <h2>{price} р.</h2>
                <p>/сутки</p>
              </span>
              <Button product={product} />
            </div>
          </div>
        </div>
        <div className={styles.bottom} id='bottom'>
          <div className={styles.navigation} ref={myRef}>
            <button className={styles.wrapper} onClick={() => setOpen('specifications')}>
              <h3 className={clsx(open !== 'specifications' && styles.disabled)}>Описание</h3>
            </button>
            <button className={styles.wrapper} onClick={() => setOpen('params')}>
              <h3 className={clsx(open !== 'params' && styles.disabled)}>Характеристики</h3>
            </button>
          </div>
          {open === 'specifications' &&
            <p className={styles.info}>
              {specifications}
            </p>
          }
          {open === 'params' &&
            <>
              {list}
            </>
          }
        </div>
      </div>
    </section>
  )
}

export default CardInfo