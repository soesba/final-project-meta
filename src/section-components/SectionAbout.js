const founders1 = require('assets/images/Mario and Adrian A.jpg')
const founders2 = require('assets/images/Mario and Adrian b.jpg')
function SectionAbout() {
  return (
    <section className='about-section'>
      <div className='container'>
      <div className='wrapper-text'>
          <h1 className='title'>Little Lemon</h1>
          <h2 className='subtitle'>Chicago</h2>
          <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>      
        </div>
        <div className='wrapper-image'>
          <img className='img-restaurant' alt="about" src={founders1}></img>
          <img className='img-restaurant' alt="about" src={founders2}></img>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
