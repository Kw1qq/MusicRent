import { useState } from "react"

import Title from "@/components/Title"
import Banner from "@/components/Banner"
import Preview from "@/components/Preview"
import Header from "@/components/Header"
import Popup from "@/components/Popup"
import Footer from "@/components/Footer"
import Sales from "@/components/Sales"

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
        <Banner />
        <Title />
        <Preview />
        <Sales />
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