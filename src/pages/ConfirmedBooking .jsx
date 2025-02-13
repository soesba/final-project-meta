const ConfirmedBooking = (props) => {
  const getReserva = () => {
    if (props.reserva) {
      return (
        <div className='datos-reserva'>
          <div className='row'>
            <label className='color'>Día:</label>
            <label>{Intl.DateTimeFormat('es-ES', {formatString: 'dd/mm/YYYY'}).format(new Date(props.reserva.dia))}</label>
          </div>
          <div className='row'>
            <label className='color'>Hora:</label>
            <label>{props.reserva.hora}</label>
          </div>
          <div className='row'>
            <label className='color'>Nº comensales:</label>
            <label>{props.reserva.comensales}</label>
          </div>
          <div className='row'>
            <label className='color'>Ocasión:</label>
            <label>{props.reserva.ocasion}</label>
          </div>
        </div>
      )
    } else {
      return(
        <div>No hay ninguna reserva con ese nombre</div>
      )
    }
  }
  return (
      <section className='mireserva-section'>
        <div className="container">
          <div className="wrapper-text">
            <h2 className="subtitle">Mi reserva</h2>
          </div>
          {getReserva()}
        </div>
        <div>

        </div>
      </section>
  )

}

export default ConfirmedBooking