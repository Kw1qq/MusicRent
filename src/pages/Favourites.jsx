import { useState } from "react"

import Header from "@/components/Header"
import Popup from "@/components/Popup"
import Footer from "@/components/Footer"
import FavoriteProducts from "@/components/FavoriteProducts"

const Favourites = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  document.body.style.overflow = isOpenMenu ? 'hidden' : ''

  return (
    <>
      <Header
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
      <main className="content">
        <FavoriteProducts />
      </main>
      <Footer />
      <Popup
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
    </>
  )
}

export default Favourites