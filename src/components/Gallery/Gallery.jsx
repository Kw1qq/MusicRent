import { useState } from 'react'

import styles from './Gallery.module.scss'

const Gallery = (props) => {
  const {
    images
  } = props

  const [currentImg, setCurrentImg] = useState(0)

  return (
    <div className={styles.gallery}>
      <img src={images[currentImg]} alt="" className={styles.image} />
      <div className={styles.side}>
        {images.map((image, index) => {
          return (
            <button key={image} onClick={() => { setCurrentImg(index) }} className={styles.button}>
              <img src={image} alt="" className={styles.imgsmall} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery