import 'assets/styles/booking-form.css';
import { getAllTimes } from 'BookingAPI';
import { useState } from 'react';
import PropTypes from 'prop-types';

const BookingForm = ({ freeTimes, handleChanges }) => {
  console.log('LOG~ ~ BookingForm ~ freeTimes, handleChanges:', freeTimes, handleChanges)
  const today = Intl.DateTimeFormat('en-CA', {formatString: 'yyyy-mm-dd'}).format(new Date())
  const [time, setTime] = useState("0");
  const [guestNo, setGuestNo] = useState("1"); 
  const [occasion, setOccasion] = useState("0"); 
  const [date, setDate ] = useState(today)
  const [errorMessages, setErrorMessages] = useState({})

  const changeDate = (value) => {
    setDate(value)
    handleChanges({ type: 'cambiar_fecha', dia: value })
  }

  const timeOptions = () => {
    const listTimes  = ['Seleccione hora'].concat(getAllTimes())
    return listTimes.map((item, index) => {
      if (index === 0) {
        return <option key={index} value={index} disabled hidden>{ item }</option>
      } else {
        if (!freeTimes) {
          return <option key={index} value={index}>{ item }</option>
        }
        return <option key={index} value={index} disabled={!freeTimes.includes(item)}>{ item }</option>
      }
    });
  }

  const occasionOptions = () => {
    const options  = ['Seleccione ocasión', 'Cumpleaños', 'Aniversario', 'Otros']
    return options.map((item, index) => {
      if (index === 0) {
        return <option key={index} value={index} disabled hidden>{ item }</option>
      } else {
        return <option key={index} value={index}>{ item }</option>
      }
    });
  }

  const formValid = () => { 
    return (Object.keys(errorMessages).length === 0 && (date && time !== '0' && guestNo && occasion !== '0'))
  }

  const handleSubmit = (e) => { 
    const resTime = document.getElementById('res-time')
    const resOccasion = document.getElementById('res-occasion')
    e.preventDefault()
    // console.log("Reservar!!!!")
    const reserva = {
      dia: date,
      hora: resTime.options[resTime.selectedIndex].text,
      comensales: guestNo,
      ocasion: resOccasion.options[resOccasion.selectedIndex].text
    }
    // console.log(reserva)
    handleChanges({ type: 'reservar', reserva: reserva })
  }

  const validate = (field, value) => {
    setErrorMessages(prevState => {
      const newState = {...prevState }
      delete newState[field]
      return newState
    })
    switch (field) {
      case 'res-date':
        if (!value) {
          setErrorMessages({...errorMessages, [field]: 'Debe seleccionar una fecha'} )
        }
        if (value < today) {
          setErrorMessages({...errorMessages, [field]: 'La fecha no puede ser anterior a la fecha actual'} )
        }
        break
      case 'res-time':
        if (value === '') {
          setErrorMessages({...errorMessages, [field]: 'Debe seleccionar una hora'} )
        }
        break
      case 'res-guests':
        if (value < 1) {
          setErrorMessages({...errorMessages, [field]: 'El número de comensales no puede ser menor que uno'})
        }
        break
      case 'res-occasion':
        if (value === '') {
          setErrorMessages({...errorMessages, [field]: 'Debe seleccionar una ocasión'} )
        }
        break
      default:
        return true
    }
    return !errorMessages.hasOwnProperty(field)
  }

  const handleInputChanges = (e) => {
    const field = e.target.id
    const value = e.target.value
    switch (field) {
      case 'res-date':
        if (validate(field, value)) {
          changeDate(value)
        }
        break
      case 'res-time':
        if (validate(field, value)) {
          setTime(value)
        }
        break
      case 'res-guests':
        if (validate(field, value)) {
          setGuestNo(value)
        }
        break
      case 'res-occasion':
        if (validate(field, value)) {
          setOccasion(value)
        }
        break
      default:
    }
  }

  return (
    <>
    <div className="wrapper-text">
    <h2 data-testid="title" className="subtitle">Reservar</h2>
  </div>
  <form id="booking-form" onSubmit={handleSubmit}>
    <div className='row'>
      <label htmlFor="res-date">Día reserva</label>
      <input
        type="date"
        id="res-date"
        data-testid="res-date"
        value={date}
        required
        onChange={handleInputChanges}
      />
      { errorMessages['res-date'] && <p id="error-res-date" data-testid="error-res-date" className='error-msg'>{errorMessages['res-date']}</p> }
      </div>
      <div className='row'>
      <label htmlFor="res-time">Hora reserva</label>
      <select
        id="res-time"
        data-testid="res-time"
        placeholder="Seleccione hora"
        value={time}
        required
        onChange={handleInputChanges} >
          { timeOptions() }
      </select>
      { errorMessages['res-time'] && <p id="error-res-time" data-testid="error-res-time" className='error-msg'>{errorMessages['res-date']}</p> }
      </div>
      <div className='row'>
      <label htmlFor="res-guests">Número de comensales</label>
      <input
        type="number"
        placeholder="1"
        required
        min="1"
        max="10"
        id="res-guests"
        data-testid="res-guests"
        value={guestNo}
        onChange={handleInputChanges}
      />
      { errorMessages['res-guests'] && <p id="error-res-guests" data-testid="error-res-guests" className='error-msg'>{errorMessages['res-date']}</p> }
      </div>
      <div className='row'>
      <label htmlFor="res-occasion">Ocasión</label>
      <select
        id="res-occasion"
        data-testid="res-occasion"
        required
        value={occasion}
        onChange={handleInputChanges} >
        { occasionOptions() }
      </select>
      { errorMessages['res-occasion'] && <p id="error-res-occasion" data-testid="error-res-occasion" className='error-msg'>{errorMessages['res-date']}</p> }
      </div>
      <div className='row button'>
        <input data-testid="btnSubmit" type="submit" value="Reservar" disabled={!formValid()} aria-label="On Click"/>
      </div>
    </form>
    </>
  )
}

BookingForm.propTypes = {
  freeTimes: PropTypes.array,
  handleChanges: PropTypes.func
};

export default BookingForm;