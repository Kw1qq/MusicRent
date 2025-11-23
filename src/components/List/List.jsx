import styles from './List.module.scss'

const List = ({ children }) => {

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {children}
      </ul>
    </div>
  )
}

export default List