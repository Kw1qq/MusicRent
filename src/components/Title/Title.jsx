import styles from './Title.module.scss'

const Title = () => {

  return (
    <section className={styles.title}>
      <div className='container'>
        <h1 className={styles.text}>
          Аренда музыкальных инструментов<br />
          MusicRent
        </h1>
      </div>
    </section>
  )
}

export default Title