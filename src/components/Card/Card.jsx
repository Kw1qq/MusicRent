import clsx from 'clsx'
import styles from './Card.module.scss'

import { NavLink } from 'react-router'

import Star from '@/assets/images/icons/star.svg'
import FavouriteButton from '@/components/FavouriteButton'
import Button from '@/components/Button'

const Card = (props) => {
  const {
    product
  } = props

  const {
    title,
    price,
    oldPrice,
    rating,
    imgSrc,
    id
  } = product

  return (
    <div className={styles.card}>
      <NavLink to={`/product/${id}`}>
        <img src={imgSrc} alt="" className={styles.image} />
      </NavLink>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          {oldPrice && <p className={styles.sale}>от {oldPrice} р.</p>}
          <div className={styles.pricing}>
            <h3 className={clsx(styles.price, oldPrice && styles.special)}>от {price} р.</h3>
            <p className={styles.term}>/сутки</p>
          </div>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.rating}>
            <p>Рейтинг: {rating}</p>
            <img src={Star} alt="" />
          </div>
        </div>
        <Button product={product} />
      </div>
      <span className={styles.favourite}>
        <FavouriteButton product={product} />
      </span>
    </div>
  )
}

export default Card