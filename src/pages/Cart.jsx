import { useState } from "react"

import Header from "@/components/Header"
import Popup from "@/components/Popup"
import Footer from "@/components/Footer"
import CartProducts from "@/components/CartProducts"
import Recommendation from "@/components/Recommendation"

const Cart = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  document.body.style.overflow = isOpenMenu ? 'hidden' : ''

  return (
    <>
      <Header
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
      <main className="content">
        <CartProducts />
        <Recommendation />
      </main>
      <Footer />
      <Popup
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
    </>
  )
}

export default Cart