import { useState, useEffect } from 'react';
import './Navbar.css'; // Import your CSS file
import Logo from '../../assets/logowhite.png'
import {FiSearch,FiUser,FiShoppingBag} from 'react-icons/fi'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu on desktop view
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = document.querySelector('.content').clientHeight;
      setMenuHeight(contentHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='banner'>
      <nav className="navbar">
        <div className="logo">
          <a href="#"><img src={Logo} alt="Logo" /></a>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"} style={{ height: menuHeight }}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li className='icon'><a href="#"><FiSearch/></a></li>
          <li className='icon'><a href="#"><FiUser/></a></li>
          <li className='icon'><a href="#"><FiShoppingBag/></a></li>
        </ul>
        <div className={isOpen ? "hamburger open" : "hamburger"} onClick={toggleMenu}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </nav>
      <div className="horizontal-line">
        <hr />
      </div>
      <div className="content">Glossary</div>
    </div>
  );
}

export default Navbar