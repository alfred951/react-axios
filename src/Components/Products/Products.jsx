/* eslint-disable react/prop-types */
import './styles.css'
import ProductDetail from '../ProductDetail/ProductDetail';
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';

const Products = () => {
    const {products, filters } = useContext(ProductContext)

    const filterProducts = (newProducts) => {
        return newProducts.filter(product => {
        return (
            product.price >= filters.minPrice &&
            (
                filters.category === 'all' ||
                product.category === filters.category
            )
        )
        })
    }
    return (
        <main className='products'>
            <ul>
                {filterProducts(products).map(product => (
                    <ProductDetail  key={product.id} item={product} />
                ))}
            </ul>
        </main>
    )
}

export default Products