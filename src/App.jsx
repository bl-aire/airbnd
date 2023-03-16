import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'

import data from './CardData'
import './App.css'


function App() {


  const cards = data.map(item => {
    return (
      <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
