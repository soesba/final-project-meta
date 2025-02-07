import Button from 'components/Button';

const imagenPortada = require('assets/images/restaurantfood.jpg')
function SectionHero () {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='wrapper-text'>
          <h1 className='title'>Little Lemon</h1>
          <h2 className='subtitle'>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non placerat mauris, id mollis urna. Etiam lacinia massa ex, id dapibus neque scelerisque ac</p>      
          <div className="wrapper-button">
            <Button color="primary" text="Reservar mesa"/>
          </div>
        </div>
        <div className='wrapper-image'>
          <img className='img-portada' alt="portada" src={imagenPortada}></img>
        </div>
      </div>
    </section>
  )
}

export default SectionHero;