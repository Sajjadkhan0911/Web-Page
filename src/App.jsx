import { Route, Routes } from 'react-router-dom'
import './App.css'
import slide1 from '../src/assets/slide-1.jpg'
import slide2 from '../src/assets/slide-2.jpg'
import slide3 from '../src/assets/slide-3.jpg'
import slide4 from '../src/assets/slide-4.jpg'
import TopBar from './Components/TopBar/TopBar'
import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/Navbar'
import Slider from './Components/Slider/Slider'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'


function App() {

  let slides = [
    slide1,slide2,slide3,slide4
  ]

  return (
    <div>
        <TopBar />
        <Header />
        <Navbar />
        <Slider  slides = {slides} />
        
        <Routes>
        <Route path='/' element={ <Home /> }></Route>
        </Routes>   
        <Footer />
    </div>
  )
}

export default App
