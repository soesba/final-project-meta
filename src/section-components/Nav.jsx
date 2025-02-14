import 'assets/styles/nav.css';
import PropTypes from 'prop-types';
import { Link } from "react-router";

function Nav({ className }) {
  return (
    <nav className={className}>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='acercade'>Acerca de</Link></li>
        <li><a href='#'>Menú</a></li>
        <li><Link to='reserva'>Reservas</Link></li>
        <li><a href='#'>Pedidos en línea</a></li>
        <li><a href='#'>Iniciar sesión</a></li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  className: PropTypes.string
};
export default Nav;
