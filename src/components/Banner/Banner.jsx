import styles from './Banner.module.scss'

import Slider from '../Slider'
import clsx from 'clsx'

import Banner1 from '@/assets/images/banner-1.png'
import Banner2 from '@/assets/images/banner-2.png'
import Banner3 from '@/assets/images/banner-3.png'
import Banner4 from '@/assets/images/banner-4.png'

const Banner = () => {

  return (
    <section className={styles.banner}>
      <div className={clsx('container', styles.inner)}>
        <Slider>
          <img src={Banner1} alt="" width={1000} height={700}/>
          <img src={Banner2} alt="" width={1000} height={700}/>
          <img src={Banner3} alt="" width={1000} height={700}/>
          <img src={Banner4} alt="" width={1000} height={700}/>
        </Slider>
      </div>
    </section>
  )
}

export default Banner