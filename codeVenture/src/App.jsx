<<<<<<< HEAD
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Footer from './Components/Footer/Footer'
import RiquadroEsempi from './Components/RiquadroEsempi/RiquadroEsempi'
import { FramePresentazione } from './Components/FramePresentazione/FramePresentazione'
import Button from './Components/ButtonPlay/Button'
=======
/* import NavBar from './Components/NavBar/NavBar' */
import './App.css'
import Footer from './Components/Footer/Footer'
import RiquadroEsempio from './Components/RiquadroEsempi/RiquadroEsempi'
import { FramePresentazione } from './Components/FramePresentazione/FramePresentazione'
/* import Button from './Components/ButtonPlay/Button' */
>>>>>>> game
import { Routes, Route } from 'react-router-dom'
import Game from './Components/Game'
import Layout from './Components/Layout'
function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            {' '}
<<<<<<< HEAD
            <FramePresentazione /> <RiquadroEsempi /> <Footer />{' '}
=======
            <FramePresentazione /> <RiquadroEsempio/> <Footer />{' '}
>>>>>>> game
          </Layout>
        }
      />
      <Route path='/Game/*' element={<Game />} />
    </Routes>
  )
}

export default App
