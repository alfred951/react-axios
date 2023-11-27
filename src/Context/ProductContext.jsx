/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
//import { products as initialProducts } from '../mocks/products.json'
import axios from 'axios'

export const ProductContext = createContext();

export const GetProductContext = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    const [products, setProducts] =  useState([])

    useEffect(() => {
        const products = async () => {
            const response = await axios.get('http://localhost:3000/products/')
            setProducts(response.data.map((product)=>{
                return {
                    "id":product.id,
                    "title":product.name,
                    "description":product.description,
                    "price":product.price,
                    "discountPercentage":2.92,
                    "rating":4.92,
                    "stock":54,
                    "brand":"Golden",
                    "category":"home-decoration",
                    "thumbnail":"",
                    "images":[]
                }
            }))
        }
        products()
    }, [])

    return (
        <ProductContext.Provider value={{
            products,
            filters,
            setFilters
        }}
        >
            {children}
        </ProductContext.Provider>
    )
};
