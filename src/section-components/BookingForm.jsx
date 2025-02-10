import 'assets/styles/booking-form.css';
import { useState } from 'react';

const BookingForm = (props) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [guestNo, setGuestNo] = useState("1"); 
  const [occasion, setOccasion] = useState(""); 
  const [date, setDate ] = useState(Intl.DateTimeFormat('en-CA', {formatString: 'yyyy-mm-dd'}).format(new Date()))


  const changeDate = (value) => {
    setDate(value)
    props.handleChanges({ type: 'cambiar_fecha', dia: value })
  }

  const options = () => {
    const listTimes  = ['Seleccione hora', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    return listTimes.map(item => {
      if (!props.reservedTimes) {
        return <option key={item}>{ item }</option>
      }
      return <option key={item} disabled={props.reservedTimes.includes(item)}>{ item }</option>
    });
  }

  const formValid = () => { 
    return (name && date &&  time &&  guestNo && occasion)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log("Reservar!!!!")
    const reserva = {
      nombre: name,
      dia: date,
      hora: time,
      comensales: guestNo,
      ocasion: occasion
    }
    console.log(reserva)
    props.handleChanges({ type: 'reservar', reserva: reserva })
  }

  return (
    <>
    <div className="wrapper-text">
    <h2 data-testid="title" className="subtitle">Reservar</h2>
  </div>
  <form id="booking-form" onSubmit={handleSubmit}>
    <label htmlFor="res-name">Nombre y apellidos</label>
      <input
        type="text"
        id="res-name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <label htmlFor="res-date">Día reserva</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          changeDate(e.target.value)
        }}
      />
      <label htmlFor="res-time">Hora reserva</label>
      <select
        id="res-time"
        placeholder="Seleccione hora"
        value={time}
        onChange={(e) => { 
          setTime(e.target.value); 
        }} >
          { options() }
      </select>
      <label htmlFor="guests">Número de comensales</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guestNo}
        onChange={(e) => { 
          setGuestNo(e.target.value); 
        }} 
      />
      <label htmlFor="occasion">Ocasión</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => { 
          setOccasion(e.target.value); 
        }}>
        <option>Seleccione ocasion</option>
        <option>Cumpleaños</option>
        <option>Aniversarion</option>
      </select>
      <input type="submit" value="Reservar" disabled={!formValid()}/>
    </form>
    </>
  )
}

export default BookingForm;