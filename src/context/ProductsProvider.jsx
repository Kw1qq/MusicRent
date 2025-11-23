import { createContext, useReducer } from "react"

import { currentProducts } from '@/products'

export const ProductsContext = createContext(null)
export const ProductsContextDispatch = createContext(null)

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(
    ProductsReducer,
    currentProducts
  );

  return (
    <ProductsContext value={products}>
      <ProductsContextDispatch value={dispatch}>
        {children}
      </ProductsContextDispatch>
    </ProductsContext>
  )
}

export default ProductsProvider

function ProductsReducer(products, action) {
  switch (action.type) {
    case 'changed': {
      return products.map(product => {
        if(product.id === action.product.id) {
          return action.product
        }
        return product
      })
    }
    default:
      break;
  }
}