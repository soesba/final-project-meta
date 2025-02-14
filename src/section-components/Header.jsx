import 'assets/styles/header.css'

import MenuMobile from 'components/MenuMobile';
import Menu from 'components/Menu';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className="wrapper-logo">
          <img id="logo" alt="logo"></img>
        </div>
        <div className='wrapper-menu'>
          <Menu />
          <MenuMobile></MenuMobile>
        </div>
      </div>
    </header>
  );
}

export default Header;