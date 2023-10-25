/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Filters from "../Filters/Filters";
import './styles.css'

const Header = () => {
    return (
        <>
            <header className="header">
                <h2><Link to="/">React Shop 🛒</Link></h2>
                <nav>
                    <ul>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/acerca-de">Acerca De</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </header>
            <Filters />
        </>
    );
};

export default Header;