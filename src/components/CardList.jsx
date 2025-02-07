import 'assets/styles/card-list.css';
import Card from './Card';

function CardList ({ cards }) {
  const cardList = cards.map(card =>
    <Card key={ card.id } data={ card }>
    </Card>
  );
  return (
    <div className='card-list'>
      { cardList }
    </div>
  )
}

export default CardList;