import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Footer from './Components/Footer'
import RiquadroEsempi from './RiquadroEsempi/RiquadroEsempi'
import { FramePresentazione } from './Components/FramePresentazione/FramePresentazione'

function App() {
  return (
    <div className='flex flex-col items-center'>
        <NavBar/>
        <FramePresentazione/>
        <RiquadroEsempi/>
        <Footer/>
    </div>
  )
}

export default App
