import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Footer from './Components/Footer'
import RiquadroEsempi from './RiquadroEsempi/RiquadroEsempi'
import { FramePresentazione } from './Components/FramePresentazione/FramePresentazione'
import Button from './Components/ButtonPlay/Button'
import { Routes,Route} from 'react-router-dom'
import Game from './Components/Game'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Button/>
      <Routes>
        <Route path='/game' element={<Game/>} />
      </Routes>
        <NavBar/>
        <FramePresentazione/>
        <RiquadroEsempi/>
        <Footer/>
    </div>
  )
}
export default App