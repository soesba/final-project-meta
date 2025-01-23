import 'assets/styles/main.css';
import SectionAbout from './SectionAbout';
import SectionHero from './SectionHero';
import SectionTestimonials from './SectionTestimonials';
import SectionHighlights from './SectionHighlights';

function Main () {
  return (
  <div className='main-container'>
    <SectionHero />
    <SectionHighlights />
    <SectionTestimonials />
    <SectionAbout />
  </div>
  )
}

export default Main;