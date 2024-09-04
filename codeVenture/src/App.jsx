import React from 'react';
import './App.css'
import Footer from './Components/Footer/Footer'
import RiquadroEsempio from './Components/RiquadroEsempi/RiquadroEsempi'
import { FramePresentazione } from './Components/FramePresentazione/FramePresentazione'
import { Routes, Route } from 'react-router-dom'
import Game from './Components/Game'
import Layout from './Components/Layout'
import CodeEditor from './CodeEditor' 

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Footer />
          </Layout>
        }
      />
      <Route path='/Game/*' element={<Game />} />
      <Route path='/code-editor' element={<CodeEditor />} /> {/* Aggiungi questa riga */}
    </Routes>
  )
}

export default App