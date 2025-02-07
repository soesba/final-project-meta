import BookingForm from 'section-components/BookingForm';

const BookingPage = (props) => {
  console.log('LOG~ ~ BookingPage ~ props:', props)
  return (
    <section className='about-section'>
      <div className='container'>
        <BookingForm
          reservedTimes={props.reservedTimes} 
          handleChanges={(e) => props.handleChanges(e)}></BookingForm>
      </div>
    </section>
  )
}

export default BookingPage;