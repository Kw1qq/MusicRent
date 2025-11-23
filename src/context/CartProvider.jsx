import { createContext, useContext, useEffect, useState } from "react"

import { ProductsContext } from '@/context/ProductsProvider'

export const CartContext = createContext(null)
export const CartContextDispatch = createContext(null)

const CartProvider = ({ children }) => {
  const currentProducts = useContext(ProductsContext)
  const filteredProducts = currentProducts
    .filter(product => product.isInCart)

  const [products, setProducts] = useState(filteredProducts.map(product => {
    return {
      ...product,
      isSelected: true,
      count: 1
    }
  }))

  useEffect(() => {
    const result = filteredProducts.map(product => {
      const p = products.find(p => p.id === product.id)
      if (p) {
        return {
          ...product,
          isSelected: p.isSelected,
          count: p.count,
        }
      }
      return {
        ...product,
        isSelected: true,
        count: 1,
      }
    })

    setProducts(result)
  }, [currentProducts])

  return (
    <CartContext value={products}>
      <CartContextDispatch value={setProducts}>
        {children}
      </CartContextDispatch>
    </CartContext>
  )
}

export default CartProvider