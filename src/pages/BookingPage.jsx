import BookingForm from 'section-components/BookingForm';

const BookingPage = (props) => {
  return (
    <section className='reserva-section'>
      <div className='container'>
        <BookingForm
          freeTimes={props.freeTimes} 
          handleChanges={(e) => props.handleChanges(e)}></BookingForm>
      </div>
    </section>
  )
}

export default BookingPage;