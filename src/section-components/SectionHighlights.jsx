import Button from 'components/Button';
import CardList from 'components/CardList';

function SectionHighlights () {
  const cards = [
    {
      id: 1,
      title: 'Greek Salad',
      price: 12.99,
      image: 'greek-salad.jpg',
      text: 'The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese.garnished with crunchy garlic and rosemary croutons.'
    },
    {
      id: 2,
      title: 'Bruchetta',
      price: 5.99,
      image: 'bruchetta.avif',
      text: 'Au Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil'
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: 5.00,
      image: 'lemon dessert.jpg',
      text: "Thie comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
    }
  ]

  return (
    <section className='highlights-section'>
      <div className='container'>
      <div className='wrapper-cabecera'>
        <div className='title'>
          <h2 className='subtitle'>This week specials!</h2>
        </div>
        <div className='button'>
          <Button color="primary" text="Menú online"></Button>
        </div>
      </div>
        <CardList cards={cards} />
      </div>
    </section>
  )
}

export default  SectionHighlights;