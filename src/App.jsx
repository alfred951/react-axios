import { useState } from "react";
import Products from "./Components/Products/Products";
import { products as initialProducts } from './mocks/products.json'
import Header from "./Components/Header/Header";

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = () => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  console.log(filterProducts())

  return (
    <>
      <Header filters={filters} setFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
