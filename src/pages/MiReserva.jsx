const MiReserva = (props) => {
  console.log('LOG~ ~ MiReserva ~ props:', props)
  const getReserva = () => {
    if (props.reserva) {
      return (
        <div className='datos-reserva'>
          <div className='color nombre'>Nombre:</div>
          <div className='nombre'>{props.reserva.nombre || props.reserva.name}</div>
          <div className='color dia'>Día:</div>
          <div className='dia'>{Intl.DateTimeFormat('es-ES', {formatString: 'dd/mm/YYYY'}).format(new Date(props.reserva.dia))}</div>
          <div className='color hora'>Hora:</div>
          <div className='hora'>{props.reserva.hora}</div>
          <div className='color comensales'>Nº comensales:</div>
          <div className='comensales'>{props.reserva.comensales}</div>
          <div className='color ocasion'>Ocasión:</div>
          <div className='ocasion'>{props.reserva.ocasion}</div>
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

export default MiReserva