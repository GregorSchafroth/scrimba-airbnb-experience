import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const cards = data.map(datum => (
  <Card 
    key={datum.id}
    img={datum.coverImg}
    rating={datum.stats.rating}
    reviewCount={datum.stats.reviewCount}
    location={datum.location}
    title={datum.title}
    price={datum.price}
    openSpots={datum.openSpots}
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
