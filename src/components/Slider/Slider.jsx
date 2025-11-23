import { useEffect, useState } from 'react'
import clsx from 'clsx'

import styles from './Slider.module.scss'

const Slider = (props) => {
  const {
    children
  } = props

  const [slide, setSlide] = useState(0)

  const gap = 20

  useEffect(() => {
    const timer = setTimeout(() => {
      moveSlide(slide + 1)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [slide])

  function moveSlide(index) {
    if (index > children.length - 1) {
      setSlide(0)
      return
    }
    if (index < 0) {
      setSlide(children.length - 1)
      return
    }
    setSlide(index)
  }

  return (
    <div className={styles.slider}>
      <button
        className={clsx(styles.button, styles.prev)}
        onClick={() => moveSlide(slide - 1)}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000"></path> </g></svg>
      </button>

      <div className={styles.container}>
        <div
          className={styles.slide}
          style={{
            transform: `translateX(calc(-${100 * slide}% - ${gap * slide}px))`,
            gap
          }}
        >
          {children}
        </div>
        <div className={styles.dots}>
          {children.map((_, i) => {
            return (
              <button
                key={i}
                className={clsx(styles.dot, i === slide && styles.active)}
                onClick={() => moveSlide(i)}
              >
              </button>
            )
          })}
        </div>
      </div>

      <button
        className={clsx(styles.button, styles.next)}
        onClick={() => moveSlide(slide + 1)}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000"></path> </g></svg>
      </button>
    </div>
  )
}

export default Slider