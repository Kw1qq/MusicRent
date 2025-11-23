import styles from './BurgerButton.module.scss'

const BurgerButton = (props) => {
  const {
    onClick,
  } = props

  return (
    <button className={styles.button} onClick={() => {onClick(isOpen => !isOpen)}}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default BurgerButton