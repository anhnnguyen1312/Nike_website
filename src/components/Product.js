import React from 'react';
import './Cards.css';
import { Button } from './Button';
import ProductItem from './ProductItem';
import {products} from './data';
function Product() {
  const ListProducts = products.map(product => 
    <ProductItem
              src={product.src}
              label={product.label}
              path={product.path}
              text={product.text}
              type={product.type}
              color={product.color}
              price={product.price}
            />
    );
  return (
    <>
    
    <div className='cards'>
      <h1>ALL PRODUCTS</h1>
      {/* <Button buttonStyle=' button btn--primary'> Get Notified</Button> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
          {ListProducts}
          </ul>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Product;
