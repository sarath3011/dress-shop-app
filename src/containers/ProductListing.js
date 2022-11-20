import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from "../redux/actions/ProductAction";
import ProductContainer from './ProductContainer';
const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch =useDispatch();//Adding data into store
      useEffect(()=>{
       dispatch( fetchProducts());
    },[])
    console.log(products);
    return (
        <div className="ui grid container">
            <ProductContainer/>
        </div>
    );
};

export default ProductListing;