import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';
import { GetProductContext } from './Context/ProductContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Esta Pagina No Existe</h1>
  },
  {
    path: 'productos/details/:id',
    element: <ProductDetail />,
    errorElement: <h1>Esta Pagina No Existe</h1>
  },
  {
    path: '/productos',
    element: <h1>Esta Pagina De Productos</h1>,
    errorElement: <h1>Esta Pagina No Existe</h1>
  },
  {
    path: '/acerca-de',
    element: <h1>Esta Pagina De Acerca De</h1>,
    errorElement: <h1>Esta Pagina No Existe</h1>
  },
  {
    path: '/contacto',
    element: <h1>Esta Pagina De Contacto</h1>,
    errorElement: <h1>Esta Pagina No Existe</h1>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <GetProductContext>
    <RouterProvider router={router} />
  </GetProductContext>

)
