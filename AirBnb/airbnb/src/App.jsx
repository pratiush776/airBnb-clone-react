import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {
  const cards=data.map((card)=>{
    return < Card 
      key={card.id}
      coverImg={card.coverImg}
      rating={card.stats.rating}
      location={card.location}
      reviewCount={card.stats.reviewCount}
      price={card.price}
      title={card.title}
    />
  })
  return(
    <>
      <Hero/>
      <div className='cards-container'>
        {cards}
      </div>
    </>
  )
}

export default App
