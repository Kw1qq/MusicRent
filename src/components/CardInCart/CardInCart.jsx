import styles from './CardInCart.module.scss'

import { NavLink } from 'react-router'

import DeleteButton from '@/components/DeleteButton'
import FavouriteButton from '@/components/FavouriteButton'
import Checkbox from '@/components/Checkbox'
import Counter from '@/components/Counter'

const CardInCart = (props) => {
  const {
    product,
  } = props

  const {
    title,
    price,
    imgSrc,
    isSelected,
    id,
    count
  } = product

  return (
    <div className={styles.card}>
      <NavLink to={`/product/${id}`}>
        <img src={imgSrc} alt="" className={styles.image} />
      </NavLink>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.buttons}>
            <DeleteButton product={product} />
            <FavouriteButton product={product} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <div>Дней аренды</div>
            <Counter count={count} id={id} />
          </div>
          <h3 className={styles.price}>{price * count} р.</h3>
        </div>
      </div>
      <span className={styles.wrapper}>
        <Checkbox isSelected={isSelected} id={id} />
      </span>
    </div>
  )
}

export default CardInCart