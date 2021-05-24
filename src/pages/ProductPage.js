import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = ({match}) => {
    return (
        <>
            <div>Strona produktu</div>
            <Product id = {match.params.nazwa}/>
            <Link to = '/products'>produkt do listy produktów</Link>
        </>
    );
}

export default ProductPage;