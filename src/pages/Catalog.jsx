import { useState } from "react"
import { useParams } from "react-router"

import Header from "@/components/Header"
import Popup from "@/components/Popup"
import Footer from "@/components/Footer"
import Assortment from "@/components/Assortment"

const Catalog = () => {
  const { search } = useParams()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  document.body.style.overflow = isOpenMenu ? 'hidden' : ''

  return (
    <>
      <Header
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
      <main className="content">
        <Assortment search={search} />
      </main>
      <Footer />
      <Popup
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
    </>
  )
}

export default Catalog