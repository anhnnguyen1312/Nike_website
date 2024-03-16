import React from 'react'
import './ProductDetail.css';
import { Collapse, Alert, Button} from 'antd';
import {ReviewData} from './ReviewData'
export default function ProductDetail(){
    // const handleAddToCart = () => {
      
    //     <Alert
    //     message="Success Tips"
    //     type="success"
    //     showIcon
    //     action={
    //       <Button size="small" type="text">
    //         UNDO
    //       </Button>
    //     }
    //     closable
    //   />
     
            
    //     {/* <Alert
    //     message="Product added to cart!"
    //     type="success"
    //     showIcon
    //     action={

    //        <Button size="small" type="text">
    //        Continue
    //         </Button>
        
    //     }
    //         closable
    //     /> */}
    // };
    const feedbackdata = ReviewData.map(data =>
        
            <>
            <div className='review'>
            <div className='star'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>
                {data.name}
            </p>
            <p>{data.date}</p>
            <p> {data.feedback}</p>
            </div>
            </>
        )
    const text = (
        <p
          style={{
            paddingLeft: 24,
            textAlign:'left'
          }}
        >
        Your order of 5.000.000₫ or more gets free standard delivery.<br/>

        Standard delivered 4-5 Business Days<br/>
        Express delivered 2-4 Business Days<br/>

        Orders are processed and delivered Monday-Friday (excluding public holidays)
        </p>
      );
      const review=['abc']
      const items = [
        {
          key: '1',
          label: 'Size and fit',
          children: text,
        },
        {
          key: '2',
          label: 'Free Delivery and Returns',
          children: review,
        },
        {
            key: '2',
            label: 'Free Delivery and Returns',
            children: feedbackdata,
          }
      ];
    return (
        <>
        <div className='productDetail'>
            <div className='productDetail_container'>
                <div className='left_container'>
                    <div className='image_container'>
                        <div className='img_grid'>
                            <img src='images/img-detail.jpg'/> 
                        </div>
                        <div className='img_grid'>
                            <img src='images/img-detail1.jpg'/> 
                        </div>
                        <div className='img_grid'>
                            <img src='images/img-detail2.jpg'/> 
                        </div>
                        <div className='img_grid'>
                            <img src='images/img-detail3.jpg'/> 
                        </div>
                        <div className='img_grid'>
                            <img src='images/img-detail4.jpg'/> 
                        </div>
                        <div className='img_grid'>
                            <img src='images/img-detail5.jpg'/> 
                        </div>
                        <div className='feedback_container'>
                            <h1> Up load your photo and let us know your experience</h1>
                            <div className='feedback'>
                                <button className='btn_favorite' style={{width:'40%',background:'white',textAlign:'left'}}>Up load your photo <i class="fa-solid fa-image"></i></button>
                                <input type='text' placeholder="Send us your feedback!" className='btn_favorite' style={{width:'40%',background:'white'}}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='right_container'>
                    <div className='text'>
                        <h1 className='headline_pdr'>NIKE DUNK LOW</h1>
                        <p className='label_pdr'> Street Shoes</p>
                        <div className='price_pdr'> 300$</div>

                    </div>

                    <div className='size_container'>
                        <div className='size_guide'>
                            <span className='select_size'> Select Size</span>
                            <a className='size_guide_link'> Size guide</a>
                        </div>
                        <div className='grid_container'>
                        <div>                              
                                <label className='label_size'> 35 </label>
                            </div> 
                            <div>                              
                                <label className='label_size'> 36 </label>
                            </div> 
                            <div>
                                <label className='label_size'> 37 </label>
                            </div>
                            <div>
                                <label className='label_size'> 38 </label>
                            </div><div>
                                <label className='label_size'> 39 </label>
                            </div><div>
                                <label className='label_size'> 40 </label>
                            </div><div>
                                <label className='label_size'> 41 </label>
                            </div>
                            <div>                              
                                <label className='label_size' style={{color:"rgb(228, 224, 224)", cursor:"not-allowed"}}> 42 </label>
                            </div> 
                            <div>                              
                                <label className='label_size' style={{color:"rgb(228, 224, 224)", cursor:"not-allowed"}}> 43 </label>
                            </div> 
                            <div>                              
                                <label className='label_size' style={{color:"rgb(228, 224, 224)", cursor:"not-allowed"}}> 44 </label>
                            </div> 
                           
                        </div>
                    </div>
                    <div className='btn_cart_container'>
                        <button className='btn_cart'>Add to cart</button>
                        <button className='btn_favorite'>Favorite <i class="fa-regular fa-heart"></i> </button>

                    </div>
                    <div className='description_container'>
                        <p className='decription'>
                        Let your attitude have the edge in your Nike Air Max Plus,
                         a Tuned Air experience that offers premium stability 
                         and unbelievable cushioning. Featuring the original's wavy design lines, 
                         TPU accents and airy mesh on the upper, it celebrates defiant style.
                        </p>
                        <ul className='list_description'>
                            <li>Colour: Black/Grey/White/Red</li>
                            <li>Style: Basket shoes </li>
                        </ul>

                    </div>
                    <div className='a'>
                    <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}