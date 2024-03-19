import React from 'react'
import './Cart.css'
import {Select, Space, Dropdown} from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
export default function Cart(){
    const quantity = [
        {
          label: '1',
          key: '1',
        },
        {
            label: '2',
            key: '2',
          },
          {
            label: '3',
            key: '3',
          },
          {
            label: '4',
            key: '4',
          }
    ]
    const handleButtonClick = (e) => {
        console.log('click left button', e);
      };
    const handleMenuClick = (e) => {
        console.log('click', e);
      };
    const menuProps = {
        quantity,
        // onClick: handleMenuClick,
      };
    return (
        <>
        <div className='container'>
            <div className='left_checkout'>
                <div className=' row cheackout_header'>
                    <h1 className='row'> your cart </h1>
                    <h3 className='row'>TOTAL (1 Products): 200$ </h3>
                    <p className='row'>Free delivery with 100$ </p>
                </div>
                <div className='row main' >
                    <div className='row promotion_container'>
                        <div className='promotion'>
                            <h2> chritsmas sale up to 70%</h2>
                            <h3>Buy 1 get 1 and numerous products sale up to 70%</h3>
                            <a href='/products' className='buy_now_link'>
                                Buy now
                            </a>
                        </div>
                    </div>
                    <div className='cart_cards'>
                        <div className='container cart_card'>
                            <div style={{height:'200px', width:'200px'}} className='img_cart'>
                                <img src='images/img1.jpg'/>
                            </div>
                            <div className='infor_cart_container'>
                                <div className='container infor_wrapper'>
                                <div className='infor_cart'>
                                    <h2> NIKE AIR JORDAN</h2>
                                    <h6 style={{padding:'10px 0'}}>BLAKE</h6>
                                    <h6> SIZE: 38</h6>
                                    <h3 style={{paddingTop:'10px'}} >PRICE: 300$  </h3>
                                </div>
                                <div className='btn_x'>
                                    <div className='x'>
                                        <i class="fa-solid fa-x"></i>
                                    </div>
                                    <div className='x'>
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                </div>
                                <div className='size_select'>
                                {/* <Dropdown.Button menu={quantity} onClick={handleButtonClick}>
                                Dropdown
                                </Dropdown.Button> */}
                                 </div>
                            </div>
                        </div>
                        <div className='container cart_card'>
                        <div style={{height:'200px', width:'200px'}} className='img_cart'>
                                <img src='images/img1.jpg'/>
                            </div>
                            <div className='infor_cart_container'>
                                <div className='infor_cart'>
                                    <h2> NIKE AIR JORDAN</h2>
                                    <h6 style={{padding:'10px 0'}}>BLAKE</h6>
                                    <h6> SIZE: 38</h6>
                                    <h3 style={{paddingTop:'10px'}} >PRICE: 300$  </h3>
                                </div>
                                <div className='size_select'>
                                    {/* <Select  options={[{ value: '1', label: <span>1</span> }]} /> */}
                                    {/* <Dropdown menu={menuProps}>
                                    <Button>
                                        <Space>
                                        1
                                        <DownOutlined />
                                        </Space>
                                    </Button>
                                    </Dropdown> */}
                                </div>
                            </div>
                        </div>
                        <div className='container cart_card'>
                        <div style={{height:'200px', width:'200px'}} className='img_cart'>
                                <img src='images/img1.jpg'/>
                            </div>
                            <div className='infor_cart_container'>
                                <div className='infor_cart'>
                                    <h2> NIKE AIR JORDAN</h2>
                                    <h6 style={{padding:'10px 0'}}>BLAKE</h6>
                                    <h6> SIZE: 38</h6>
                                    <h3 style={{paddingTop:'10px'}} >PRICE: 300$  </h3>
                                </div>
                                <div className='size_select'>
                                <Dropdown
                                menu={{
                                quantity,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Hover me
                                    <DownOutlined />
                                </Space>
                                </a>
                                </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className='container cart_card'>
                        <div style={{height:'200px', width:'200px'}} className='img_cart'>
                                <img src='images/img1.jpg'/>
                            </div>
                            <div className='infor_cart_container'>
                                <div className='infor_cart'>
                                    <h2> NIKE AIR JORDAN</h2>
                                    <h6 style={{padding:'10px 0'}}>BLAKE</h6>
                                    <h6> SIZE: 38</h6>
                                    <h3 style={{paddingTop:'10px'}} >PRICE: 300$  </h3>
                                </div>
                                <div className='size_select'>
                                    <Select  options={[{ value: '1', label: <span>1</span> }]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right_checkout'>
                <div className='cart_summary_container'>
                    <div className='cart_summary'>
                        <h3>PAYMENT SUMMARY</h3>
                        <div className='row_payment_summary'>
                            <p>Quantity</p>
                            <p>4</p>
                        </div>
                        <div className='row_payment_summary'>
                            <p>Price</p>
                            <p>550$$</p>
                        </div>
                        <div className='row_payment_summary'>
                            <p>Ship</p>
                            <p>0$</p>
                        </div>
                        <div className='row_payment_summary'>
                            <p>On Sale</p>
                            <p>50$</p>
                        </div>
                        <div className='row_payment_summary'>
                            <h4> Total</h4>
                            <h4>500$</h4> 
                        </div>
                       
                    </div>
                    <div className='payment_btn_div'>
                        <button className='payment_btn'> Payment</button>
                    </div>
                    <div className='discount_div'>
                        <i style={{color: 'black',padding:'0 20px'}} class="fa-solid fa-ticket"></i>
                        <a href='/' className='buy_now_link'> Apply your vouncher</a>
                    </div>
                </div>
                <div className='payment_container'>
                    <p>ACCEPTANCE METHOD PAYMENT</p>
                    <div className='icon_visa'>
                        <img src='images/mastercard.jpg'/>
                        <img src='images/visa.jpg'/>
                        <img style={{height:'48px'}} src='images/momo.jpg'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}