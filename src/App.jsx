import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"

import Home from './pages/Home'
import Cart from "./pages/Cart"
import Favourites from './pages/Favourites'
import Product from "./pages/Product"
import Catalog from "./pages/Catalog"

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }, [pathname])

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='catalog/:search?' element={<Catalog />} />
      </Routes>
    </div>
  )
}

export default App