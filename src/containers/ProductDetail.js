import React, { useEffect } from 'react';
import axios from 'axios';
import {fetchProduct,removeselectedProducts} from '../redux/actions/ProductAction'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './productDetail.css'
const ProductDetail = () => {
    const {productId} = useParams();
    let product = useSelector((state)=>state.product);
    const {title, image, price, category, description } = product;
    const dispatch = useDispatch();
   
    useEffect(()=>{
        if(productId && productId !== "") dispatch(fetchProduct(productId));
                  return ()=>{
                dispatch(removeselectedProducts());
            }
       
    },[productId]);
    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ?(
            <div>...loading</div>):(
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider"></div>
                  <div className="middle aligned row">
                    <div className="column lp">
                      <img className="ui fluid image" src={image} />
                    </div>
                    <div className="column rp">
                      <h1>{title}</h1>
                      <h2>
                        <a className="ui teal tag label">${price}</a>
                      </h2>
                      <h3 className="ui brown block header">{category}</h3>
                      <p>{description}</p>
                      <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div className="visible content cart">Add to Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
        </div>
    );
};

export default ProductDetail;