export const initializeTimes = () => {
  return { reservas: [], diaSeleccionado: Intl.DateTimeFormat('en-CA', {formatString: 'yyyy-mm-dd'}).format(new Date())}
}

export const updateTimes = (state) => {
  return state.reservas.filter(item => item.dia === state.diaSeleccionado).map(item => item.hora)
}