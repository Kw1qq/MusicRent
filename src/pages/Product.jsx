import { useState, useContext } from "react"
import { useParams } from "react-router";

import { ProductsContext } from '@/context/ProductsProvider'

import Header from "@/components/Header"
import Popup from "@/components/Popup"
import Footer from "@/components/Footer"
import CardInfo from "@/components/CardInfo";
import Recommendation from "@/components/Recommendation"

const Product = () => {
  const products = useContext(ProductsContext)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { id } = useParams();

  document.body.style.overflow = isOpenMenu ? 'hidden' : ''
  const product = products.find(pr => pr.id == id)

  return (
    <>
      <Header
        onHandleClickOpenMenu={setIsOpenMenu}
        isOpen={isOpenMenu}
      />
      <main className="content">
        <CardInfo product={product} />
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

export default Product