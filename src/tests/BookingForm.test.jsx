import { render, screen } from "@testing-library/react";
import BookingForm from '../section-components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByTestId("title");
    expect(headingElement).toBeInTheDocument();
})