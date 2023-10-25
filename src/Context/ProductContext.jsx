/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { products as initialProducts } from '../mocks/products.json'

export const ProductContext = createContext();

export const GetProductContext = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <ProductContext.Provider value={{
            products: initialProducts,
            filters,
            setFilters
        }}
        >
            {children}
        </ProductContext.Provider>
    )
};
