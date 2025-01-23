import Button from 'components/Button';

function SectionHighlights () {
  return (
    <section className='highlights-section'>
      <div className='container'>
        <div className='wrapper-title'>
          <h2 className='subtitle'>This week specials!</h2>
        </div>
        <div className='wrapper-button'>
          <Button color="primary" text="Menú online"></Button>
        </div>
      </div>
    </section>
  )
}

export default  SectionHighlights;