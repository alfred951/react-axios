/* eslint-disable react/prop-types */
import Filters from "../Filters/Filters";

const Header = ({ filters, setFilters }) => {
    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters filters={filters} setFilters={setFilters}/>
        </header>
    )
};

export default Header;