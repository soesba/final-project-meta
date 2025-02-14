import BookingForm from 'section-components/BookingForm';
import PropTypes from 'prop-types';

const BookingPage =  ({ freeTimes, handleChanges }) => {
  return (
    <section className='reserva-section'>
      <div className='container'>
        <BookingForm
          freeTimes={freeTimes} 
          handleChanges={(e) => handleChanges(e)}></BookingForm>
      </div>
    </section>
  )
}
BookingPage.propTypes = {
  freeTimes: PropTypes.array,
  handleChanges: PropTypes.func
};

export default BookingPage;