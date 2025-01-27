import 'assets/styles/card.css';

function getImage (url) {
  return require(`assets/images/${url}`)
}

function Card ({ data }) {
  return (
    <div className='card'>
      <div className='image' style={{backgroundImage: "url(" + getImage(data.image) + ")"}}>
      </div>
      <div className='wrapper-title'>
        <div className='card-title'>{data.title}</div>
        <div className='highlight price'>{data.price} €</div>
      </div>
      <div className='content'>{data.text}</div>
      <div className='footer highlight'>
        <div className='div-link'>
        Encargar para llevar
        </div>
      </div>
    </div>
  )
}

export default Card;