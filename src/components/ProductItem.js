import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Shoes '
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h6 className='cards__item__heading'>{props.text}</h6>
            <p className='cards__item__text'>{props.type}</p>
            <p className='cards__item__text'>{props.color}</p>
            <p className='cards__item__heading'>{props.price}</p>

          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductItem;
