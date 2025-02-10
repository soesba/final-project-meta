import { initializeTimes, updateTimes } from '../utils/Functions';

test("initializeTimes returns the expected initial times", () => {
  const expectedInitialTimes = { reservas: [], diaSeleccionado: Intl.DateTimeFormat('en-CA', {formatString: 'yyyy-mm-dd'}).format(new Date())};
  expect(initializeTimes()).toEqual(expectedInitialTimes);
});

test("updateTimes returns the expected value", () => {
  const expectedTimes = ["19:00"]
  const reservas = [{
    nombre: "Sonia",
    dia: "2-10-2025",
    hora: "19:00",
    comensales: 2,
    ocasion: "Cumpleaños"
  }]
  const diaSeleccionado = '2-10-2025'
  expect(updateTimes({reservas, diaSeleccionado})).toEqual(expectedTimes);
});