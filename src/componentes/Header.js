import logo  from 'assets/images/Logo.svg'
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <Nav />
    </header>
  );
}

export default Header;