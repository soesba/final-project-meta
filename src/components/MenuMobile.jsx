import 'assets/styles/navMobile.css';

import { useEffect, useState } from 'react';
import Nav from 'section-components/Nav';
import { useLocation } from '../../node_modules/react-router/dist/development/index';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false)
  }, [location]);

  return (
    <nav id="nav-mobile">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          id="icon-menu"
          alt="menu"
          className={isOpen ? 'open' : 'close' }></img>
      </button>
      { isOpen && <Nav className="menu-mobile" onClick={() => setIsOpen(!isOpen)}></Nav> }
    </nav>
  )
}

export default MenuMobile