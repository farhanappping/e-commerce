import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/shopping_bag.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link,  useLocation  } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    handleResize(); // Check screen width initially
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className="nav-logo">
          <Link to="/">
          <img src={logo} alt="" />
          <p>Shopper</p>
          </Link>
        </div>

        
{/* Nav menu - Show only for larger screens or when menu is toggled */}
{(showMenu || !isSmallScreen) && (
          <ul className="nav-menu">
           <li className={location.pathname === '/' ? 'active' : ''}><Link to='/' onClick={() => setShowMenu(false)}>Shop</Link></li>
<li className={location.pathname === '/mens' ? 'active' : ''}><Link to='/mens' onClick={() => setShowMenu(false)}>Men</Link></li>
<li className={location.pathname === '/womens' ? 'active' : ''}><Link to='/womens' onClick={() => setShowMenu(false)}>Women</Link></li>
<li className={location.pathname === '/kids' ? 'active' : ''}><Link to='/kids' onClick={() => setShowMenu(false)}>Kids</Link></li>

          </ul>
        )}
      

        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img className='cartimg' src={cart_icon} alt="" /></Link>
          {/* Render cart count */}
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        {/* Hamburger icon - Show only for small screens */}
        {isSmallScreen && (
          <div className={`hamburger ${showMenu ? 'show' : ''}`} onClick={handleToggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
          
      </div>
    </div>
  );
};

export default Navbar;
