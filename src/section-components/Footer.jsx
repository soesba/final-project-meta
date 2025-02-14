import 'assets/styles/footer.css';
import PropTypes from 'prop-types';

function Footer ({ className}) {
  return (
    <footer className={className}>
      <div className='container'>
        <img id="logo" alt="logo"></img>
        <nav id="navigation-section">
          <label className="card-title">Doormat navigation</label>
          <ul>
            <li><a href='pages/Inicio'>Inicio</a></li>
            <li><a href='pages/AcercaDe'>Acerca de</a></li>
            <li><a href='pages/Menu'>Menú</a></li>
            <li><a href='pages/Reservas'>Reservas</a></li>
            <li><a href='pages/PedidosOnline'>Pedidos en línea</a></li>
            <li><a href='pages/IniciarSesion'>Iniciar sesión</a></li>
          </ul>
        </nav>
        <nav id="contact-section">
          <label className="card-title">Contact</label>
          <ul>
            <li>123 Ford Blvd, Chicago, IL, 60618</li>
            <li>+1(123)456-7890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </nav>
        <nav id="social-section">
          <label className="card-title">Social media links</label>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </nav>
        </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string
}


export default Footer;
