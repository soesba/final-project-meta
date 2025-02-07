import 'assets/styles/nav.css';
import { Link } from "react-router";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/acercade'>Acerca de</Link></li>
        <li><a href='pages/Menu'>Menú</a></li>
        <li><Link to='reserva'>Reservas</Link></li>
        <li><a href='pages/PedidosOnline'>Pedidos en línea</a></li>
        <li><a href='pages/IniciarSesion'>Iniciar sesión</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
