import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../section-components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByTestId("title");
    expect(headingElement).toBeInTheDocument();
})

// test('updateTimes returns the expected value on submit', () => {
//   render(<BookingForm />);
//   const btnSubmit = screen.getByTestId('btnSubmit');
//   fireEvent.click(btnSubmit)
//   expect(btnSubmit).toBeInTheDocument();
// })

test('res-date debería tener los atributos correctos', () => {
  render(<BookingForm />);
  const element = screen.getByTestId("res-date");

  // Verificar que los atributos se hayan aplicado correctamente
  expect(element.getAttribute('id')).toBe('res-date');
  expect(element.hasAttribute('required')).toBe(true);
});

test('res-time debería tener los atributos correctos', () => {
  render(<BookingForm />);
  const element = screen.getByTestId("res-time");

  // Verificar que los atributos se hayan aplicado correctamente
  expect(element.getAttribute('id')).toBe('res-time');
  expect(element.hasAttribute('required')).toBe(true);
});

test('res-guests debería tener los atributos correctos', () => {
  render(<BookingForm />);
  const element = screen.getByTestId("res-guests");

  // Verificar que los atributos se hayan aplicado correctamente
  expect(element.getAttribute('id')).toBe('res-guests');
  expect(element.getAttribute('min')).toBe('1');
  expect(element.hasAttribute('required')).toBe(true);
});

test('res-occasion debería tener los atributos correctos', () => {
  render(<BookingForm />);
  const element = screen.getByTestId("res-occasion");

  // Verificar que los atributos se hayan aplicado correctamente
  expect(element.getAttribute('id')).toBe('res-occasion');
  expect(element.hasAttribute('required')).toBe(true);
});

test('res-date debería tener estado válido', () => {
  render(<BookingForm />);
  const element = screen.queryByTestId("error-res-date");

  // Verificar que no hay mensaje de error
  expect(element).toBeNull();
});

test('res-time debería tener estado válido', () => {
  render(<BookingForm />);
  const element = screen.queryByTestId("error-res-time");

  // Verificar que no hay mensaje de error
  expect(element).toBeNull();
});

test('res-guests debería tener estado válido', () => {
  render(<BookingForm />);
  const element = screen.queryByTestId("error-res-guests");

  // Verificar que no hay mensaje de error
  expect(element).toBeNull();
});

test('res-occasion debería tener estado válido', () => {
  render(<BookingForm />);
  const element = screen.queryByTestId("error-res-occasion");

  // Verificar que no hay mensaje de error
  expect(element).toBeNull();
});

test('res-date con fecha de ayer debería tener estado inválido', () => {
  const mockOnChange = jest.fn();
  render(<BookingForm handleChanges={mockOnChange} />);
  const input = screen.getByLabelText(/Día reserva/i);
  // Asignar una fecha anterior a hoy al input de tipo date
  const fechaAnterior = new Date();
  fechaAnterior.setDate(fechaAnterior.getDate() - 1);
  const fechaAnteriorStr = fechaAnterior.toISOString().split('T')[0];
  // Asignar valor al input
  fireEvent.change(input, { target: { value: fechaAnteriorStr } });
  // Verificar que hay mensaje de error
  const errorMessage = screen.queryByText(/La fecha no puede ser anterior a la fecha actual/i)
  expect(errorMessage).toBeInTheDocument();
});