import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductContainer.css'
const ProductContainer = () => {
    const products = useSelector((state) => state.allProducts.products);//access store to our component
    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards ">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} className="images" />
              </div>
              <div className="content">
                <div className="header header-title">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      );
    });
    return <>{renderList}</>;
  };
  
export default ProductContainer;