
import './App.css';
import { useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router';

import Footer from './section-components/Footer';
import Header from './section-components/Header';
import Inicio from 'pages/Inicio';
import AcercaDe from 'pages/AcercaDe';
import BookingPage from 'pages/BookingPage';
import MiReserva from 'pages/MiReserva';

const reducerHandleChanges = (state, action) => {
  console.log('LOG~ ~ handleChanges ~ state, action:', state, action)
  switch (action.type) {
    case 'cambiar_fecha':
      return {
        ...state,
        diaSeleccionado: action.dia
      }
    case 'reservar': {
        const existeReserva = state.reservas.find(item => item.dia === action.dia)
        if (!existeReserva) {
          console.log('Añadimos reserva')
          return {
            ...state,
            reservas: [
              ...state.reservas,
              action.reserva
            ]
          }
        }
      }
      break
    default:
  }
}

function App() {
  const navigate = useNavigate();
 
  const [state, handleChanges] = useReducer(reducerHandleChanges, { reservas: [], diaSeleccionado: Intl.DateTimeFormat('en-CA', {formatString: 'yyyy-mm-dd'}).format(new Date())});

  const getHorasReservadas = () => {
    return state.reservas.filter(item => item.dia === state.diaSeleccionado).map(item => item.hora)
  }

  useEffect(() => {
    navigate("mireserva");
  }, [state.reservas.length]);

  return (
    <><Header />
    <Routes>
      <Route index path="/" element={<Inicio />}/>
      <Route exact path="acercade" element={<AcercaDe />}/>
      <Route exact path="reserva" element={
          <BookingPage 
            reservedTimes={ getHorasReservadas() }
            handleChanges={(e) => handleChanges(e)}
          />
        }
        />
      <Route exact path="mireserva" element={<MiReserva reservas={ state.reservas } />}/>
    </Routes>
    <Footer /></>
  )
}

export default App;
