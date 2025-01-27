import 'assets/styles/testimonial-card.css';

function getStar (tipo) {
  if (tipo === 'empty') {
    return require(`assets/images/empty-star-icon-black.png`)
  } else if (tipo === 'half') {
    return require(`assets/images/half-star-icon-white.png`)
  } else {
    return require(`assets/images/full-star-icon-white.png`)
  }
}

function renderStars(rating, maxStars = 5) {
  let fullStars = Math.floor(rating); // Número de estrellas completas
  let halfStar = rating % 1 >= 0.5 ? 1 : 0; // Si el decimal es >= 0.5, usar media estrella
  let emptyStars = maxStars - fullStars - halfStar; // Calcular estrellas vacías

  const arrayFullStars = Array.from(
    { length: fullStars },
    (_, i) => (
      <img key={i} src={getStar('full')} alt='rate' className='rate-star'/>
    )
  );
  const arrayHalfStars = Array.from(
    { length: halfStar },
    (_, i) => (
      <img key={i} src={getStar('half')} alt='rate' className='rate-star'/>
    )
  );
  const arrayEmptyStars = Array.from(
    { length: emptyStars },
    (_, i) => (
      <img key={i} src={getStar('empty')} alt='rate' className='rate-star'/>
    )
  );
  return arrayFullStars.concat(arrayHalfStars).concat(arrayEmptyStars);
}

function TestimonialCard ({ data }) {
  return (
    <div className='testimonial-card'>
      <div className="rating">
        { renderStars(data.rate) }
      </div>
      <div className='person'>
        <img src={data.image} alt="person" />
        <div className='name'> { data.name } </div>
      </div>
      <div className='text'> { data.text }
      </div>
    </div>
  )
}

export default TestimonialCard;