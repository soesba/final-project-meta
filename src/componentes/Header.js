import 'assets/styles/header.css'

import Nav from './Nav';

function Header() {
  return (
    <header>
      <div className="wrapper-logo">
        <img id="logo" alt="logo"></img>
      </div>
      <div className='wrapper-menu'>
        <Nav />
        <img id="icon_menu" alt="menu"></img>
      </div>
    </header>
  );
}

export default Header;