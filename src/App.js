
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Hero from 'componentes/Hero';
import Hightlights from './componentes/Hightlights';
import Testimonials from 'componentes/Testimonials';
import About from 'componentes/About';

function App() {
  return (
    <><Header />
    <Hero></Hero>
    <Hightlights>
    </Hightlights>
    <Testimonials></Testimonials>
    <About></About>
    <Footer /></>
  )
}

export default App;
