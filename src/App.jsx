
import './App.css';
import { useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router';

import Footer from './section-components/Footer';
import Header from './section-components/Header';
import Inicio from 'pages/Inicio';
import AcercaDe from 'pages/AcercaDe';
import BookingPage from 'pages/BookingPage';
import ConfirmedBooking  from 'pages/ConfirmedBooking ';
import { initializeTimes, updateTimes } from 'utils/Functions';

const reducerHandleChanges = (state, action) => {
  switch (action.type) {
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

  useEffect(() => {
    if (state.reservaOk) {
      navigate("confirmedBooking");
    }
  }, [state.reservaOk, navigate]);

  return (
    <><Header />
    <Routes>
      <Route index path="" element={<Inicio />}/>
      <Route exact path="acercade" element={<AcercaDe />}/>
      <Route exact path="reserva" element={
          <BookingPage 
            freeTimes={ state.freeTimes }
            handleChanges={(e) => handleChanges(e)}
          />
        }
        />
      <Route exact path="confirmedBooking" element={<ConfirmedBooking  reserva={ state.reserva } />}/>
    </Routes>
    <Footer /></>
  )
}

export default App;
