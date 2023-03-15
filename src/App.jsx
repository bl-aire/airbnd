import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import smile from '../src/assets/smile.png'
import wedding from '../src/assets/wedding.png'
import bike from '../src/assets/bike.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card 
        img={smile}
        r1="5.0"
        r2={6}
        location="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card 
        img={wedding}
        r1="5.0"
        r2={30}
        location="USA"
        title="Learn wedding photography"
        price={125}
      />
      <Card 
        img={bike}
        r1="4.8"
        r2={2}
        location="USA"
        title="Group Mountain Biking"
        price={50}
      />
    </div>
  )
}

export default App
