import Home from './pages/Home'
import Collection from './sections/Collection'
import bg from './images/bg.jpg'
import Advantages from './sections/Advantages'
import Cooperate from './sections/Cooperate'
import Footer from './sections/Footer'

function App() {
  return (
    <div className='wrap'>
      <Home />
      <Collection />
      <img src={bg} alt='' className='bg' />
      <Advantages />
      <Cooperate />
      <Footer />
    </div>
  )
}

export default App
