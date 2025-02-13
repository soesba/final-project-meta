import { fetchAPI, submitAPI } from 'BookingAPI'

export const initializeTimes = (date) => {
  return { freeTimes: fetchAPI(date), reservaOk: false}
}

export const updateTimes = (freeTimes, data) => {
  console.log('LOG~ ~ submitAPI ~ formData:', data)
  freeTimes.splice(freeTimes.findIndex(item => item === data.hora), 1)
  const ok = submitAPI(data)
  return {freeTimes, ok}
}