
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';

import Footer from './section-components/Footer';
import Header from './section-components/Header';
import Inicio from 'pages/Inicio';
import AcercaDe from 'pages/AcercaDe';
import BookingPage from 'pages/BookingPage';
import ConfirmedBooking  from 'pages/ConfirmedBooking ';
import { initializeTimes, updateTimes } from 'utils/Functions';
import { useLocation } from '../node_modules/react-router/dist/development/index';

const reducerHandleChanges = (state, action) => {
  switch (action.type) {
    case 'init': {
      return {
        ...state,
        reservaOk: false
      }
    }
    case 'cambiar_fecha': {
        const horasLibres = initializeTimes(action.dia)
        return {
          freeTimes: horasLibres.freeTimes
        }
      }
    case 'reservar': {
      console.log('Añadimos reserva', action.reserva)
      const result = updateTimes(state.freeTimes, action.reserva)
      return {
        freeTimes: result.freeTimes,
        reservaOk: result.ok,
        reserva: action.reserva
      }
    }
    default:
  }
}

function App() {
  const navigate = useNavigate();
  const today = Intl.DateTimeFormat('en-CA', {formatString: 'yyyy-mm-dd'}).format(new Date())
 
  const [state, handleChanges] = useReducer(reducerHandleChanges, initializeTimes(today));
  const [footerClass, setFooterClass] = useState('visible')

  useEffect(() => {
    if (state.reservaOk) {
      handleChanges({ type: 'init' })
      navigate("/confirmedBooking");
    }
  }, [state.reservaOk, navigate]);

  const location = useLocation();
  useEffect(() => {
    console.log(location)
    setFooterClass(location.pathname === '/' ? 'visible' : 'no-visible' )
  }, [location]);

  return (
    <><Header />
    <Routes>
      <Route index path="/" element={<Inicio />}/>
      <Route path="/acercade" element={<AcercaDe />}/>
      <Route path="/reserva" element={
          <BookingPage 
            freeTimes={ state.freeTimes }
            handleChanges={(e) => handleChanges(e)}
          />
        }
        />
      <Route path="/confirmedBooking" element={<ConfirmedBooking  reserva={ state.reserva } />}/>
    </Routes>
    <Footer className={footerClass} /></>
  )
}

export default App;
