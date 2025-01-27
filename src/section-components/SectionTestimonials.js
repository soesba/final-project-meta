import TestimonialCard from 'components/TestimonialCard'

function SectionTestimonials () {
  const testimonials = [
    {
      id: 1,
      rate: 4.5,
      name: 'Sara',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit gravida nibh convallis lacinia in vel est. Cras dui tellus, aliquam euismod lorem eu, mattis congue urna.'
    },
    {
      id: 2,
      rate: 5,
      name: 'Mark',
      price: 5.99,
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
      text: 'Suspendisse vestibulum ante nunc, quis eleifend risus consectetur nec. Ut elementum scelerisque nunc, at euismod lectus pharetra sed. Etiam aliquam augue non laoreet ultrices.'
    },
    {
      id: 3,
      rate: 4,
      name: 'Laura',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      text: "Cras molestie neque id enim ullamcorper commodo. Etiam scelerisque risus quis enim dignissim, eu finibus dolor maximus"
    }
  ]

  const cards = testimonials.map(item => {
    return <TestimonialCard key={item.id} data={item} />
  })
  return (
    <section className='testimonials-section'>
      <div className='container'>
        <div className='section-title'>
          Testimonials
        </div>
        <div className='lista-cards'>
          {cards}
          </div>
      </div>
    </section>
  )
}
export default SectionTestimonials;