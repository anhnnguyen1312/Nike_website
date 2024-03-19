import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,  NavLink} from 'react-router-dom';
import './Navbar.css';
import { Input, Space } from 'antd';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { Search } = Input;

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Anh's Web
            <i class='fa-brands fa-suse' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="nav-links-active" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <Link
                to='/news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <div className='navbar_search'>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: '200px',
                color:'white'
              }}
            />
            <a className='cart' href='/cart'>
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <a className='cart' href='/login'>
              <i class="fa-solid fa-user"></i>
            </a>
            <a className='cart'>
            <i class="fa-solid fa-heart"></i>
            </a>
          </div>
          <div className='signin_btn'>
            {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
