import 'assets/styles/footer.css';

function Footer () {
  return (
    <footer>
      <div className='container'>
        <img id="logo" alt="logo"></img>
        <nav>
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
        <nav>
          <label className="card-title">Contact</label>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </nav>
        <nav>
          <label className="card-title">Social media links</label>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </nav>
        </div>
    </footer>
  );
}

export default Footer;
