import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const cards = data.map(datum => (
  <Card 
    key={datum.id}
    {...datum}
  />
))

export default function App() {
  return (
  <div> 
    <Navbar />
    <Hero />
    <div className='all--cards'>{cards}</div>
  </div>
  )
}
