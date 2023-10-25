/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { AddToCartIcon } from "../Icons/Icons";
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import Header from '../Header/Header';

function ProductDetail({ item = {} }) {
    const { products } = useContext(ProductContext)
    const { pathname } = window.location
    const id = pathname.split('/').at(-1)
    const getProduct = products.find(element => element.id === Number(id))
    const product = item.id ? item : getProduct

    return (
        <>
            {!item.id &&
                <>
                    <Header />
                    <div style={{ margin: '20px 0' }} />
                </>
            }
            <Link className='products' to={`/productos/details/${product.id}`}>
                <li >
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            </Link>
        </>
    )
}

export default ProductDetail