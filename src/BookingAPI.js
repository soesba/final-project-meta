const seededRandom = function (seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/*
* Acepta una fecha como parámetro y
* devuelve una matriz de horarios de
* reserva disponibles para la fecha proporcionada.
*/
export function fetchAPI(date) {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  result.push("Seleccione hora")
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

/*
* Acepta los datos del formulario de reserva 
* como parámetro y devolverá true 
* si los datos se enviaron correctamente
*/
export function submitAPI(formData) {
  return true
}

/*
* Devuelve todas las horas posibles de reserva
*/
export const getAllTimes = () => {
  let result = []
  for (let i = 17; i <= 23; i++) {
      result.push(i + ":00")
      result.push(i + ":30")
  }
  return result
}