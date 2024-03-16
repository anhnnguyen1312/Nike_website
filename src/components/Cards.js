import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h4 style={{textAlign:"center"}}>Comming soon</h4>
      <h1>NIKE AIR MAX DN</h1>
      <p style={{textAlign:"center"}}>The next generation of Air technology launches on March 25th</p>
      {/* <Button buttonStyle=' button btn--primary'> Get Notified</Button> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img5.jpg'
              text='NIKE AIR MAX 90'
              label='BestSeller'
              path='/news'
            />
            <CardItem
              src='images/img4.jpg'
              text='NIKE AIR JORDAN'
              label='Sold Out'
              path='/news'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='NIKE AIR MAX 1'
              label='Bestseller'
              path='/news'
            />
            <CardItem
              src='images/img1.jpg'
              text='NIKE AIR FORCE 2'
              label='Sale'
              path='/products'
            />
            <CardItem
              src='images/img2.jpg'
              text='NIKE COURT VISION'
              label='Lastest'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
