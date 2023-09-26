import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './FrameProfile.css'
import { ButtonProfile } from "../Components""

export default function FrameProfile() {
  const [lives, setLives] = useState(3) /* vite 3 */
  const [progress, setProgress] = useState(50) /* esempio progresso 50% */
  const [level, setLevel] = useState(1) /* livello */
  const [gameTime, setGameTime] = useState('0h') /* tempo di gioco */
  const [totalMinutes, setTotalMinutes] = useState(0) /* totale minuti */

  /* BARRA PROGRESSO */
  const handleIncrementProgress = () => {
    /* incrementare progresso */
    setProgress((prevProgress) => prevProgress + 10)
  }
  const handleDecrementProgress = () => {
    /* decrementare progresso */
    setProgress((prevProgress) => prevProgress - 10)
  }
  /* INCREMENTO LIVELLO CON BARRA */
  useEffect(() => {
    if (progress === 100) {
      setLevel(level + 1)
      /* torna a 0 */
      setProgress(0)
    }
  }, [progress, level])

  /* TEMPO DI GIOCO */
  useEffect(() => {
    const interval = setInterval(() => {
      const newTotalMinutes = totalMinutes + 1
      setTotalMinutes(newTotalMinutes)

      /* calcola ore e minuti */
      const hours = Math.floor(newTotalMinutes / 60)
      const minutes = newTotalMinutes % 60

      /* formattazione */
      const formattedTime = `${hours}h ${minutes}m`

      setGameTime(formattedTime)
    }, 60000) /* un minuto */

    return () => {
      clearInterval(interval)
    }
  }, [totalMinutes])

  /* VITE */
  const hearts = Array.from({ length: lives }, (_, index) => (
    <img key={index} src='/images/pngwing 41.png' className='w-16' alt='' />
  ))
  /*  const handleWrongAnswer = () => {
    if (lives > 0) {
      setLives(lives - 1)
    }
  }
  const handleCollectLife = () => {
    /* colleziona cuori
    setLives(lives + 1)
  } */

  return (
    <Router>
      <div className='app min-h-screen w-full'>
        {/* navbar */}
        <Navbar />

        {/* contenuto principale */}
        <div className='px-[10px] lg:px-[150px] pt-[60px] flex items-center xl:flex-nowrap flex-wrap justify-between'>
          {/* sezione sinistra */}
          <div className='flex items-start flex-col lg:flex-row gap-[17px]'>
            {/* immagine profilo */}
            <div className='relative h-[190px] w-[190px] bg-[#DCBF26] rounded-full flex items-center justify-center'>
              <div className='h-[150px] w-[150px] rounded-full bg-[#BA8DD6] p-4 relative overflow-hidden'>
                <img
                  src='/images/personaggio 5.png'
                  className='relative top-3'
                  alt=''
                />
              </div>
            </div>

            {/* nome giocatore + vite */}
            <div className='mt-10'>
              <div className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center transform transition-all ease-linear duration-150 hover:scale-105 justify-center'>
                <p style={{ lineHeight: '27px' }}>Nome Giocatore</p>
              </div>
              <div className='flex items-center mt-3 gap-5 pl-5'>{hearts}</div>
            </div>
          </div>

          {/* sezione destra */}
          <div className='flex flex-col items-center mt-3 lg:mt-0'>
            <div className='container mx-auto mt-5 p-4'>
              <h1 className='text-2xl font-bold text-white text-[26px]'>
                Level: {level}
              </h1>
              <div>
                {progress}%<progress value={progress} max={100}></progress>{' '}
              </div>
              <div className='mt-4'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={handleIncrementProgress()}
                >
                  Increment
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'
                  onClick={handleDecrementProgress()}
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className='px-[10px] lg:px-[80px] pt-[50px] pb-10 relative gap-4 lg:gap-10 flex items-start xl:flex-nowrap flex-wrap justify-between w-full'>
          {/* sezione sinistra */}
          <div className='flex flex-col gap-5 items-start'>
            <div
              to='/game'
              className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center transform transition-all ease-linear duration-150 hover:scale-105 justify-center'
            >
              <p className='pt-2' style={{ lineHeight: '27px' }}>
                TEMPO DI GIOCO: {gameTime}
              </p>
            </div>
            <Link
              to='/inventory'
              className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center transform transition-all ease-linear duration-150 hover:scale-105 justify-center'
            >
              <p className='pt-2' style={{ lineHeight: '27px' }}>
                INVENTARIO
              </p>
            </Link>
            <Link
              to='/lesson'
              className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center transform transition-all ease-linear duration-150 hover:scale-105 justify-center'
            >
              <p>TORNA ALLA LEZIONE</p>
            </Link>
            <Link
              to='/user'
              className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center transform transition-all ease-linear duration-150 hover:scale-105 justify-center'
            >
              <p className='pt-2' style={{ lineHeight: '27px' }}>
                MODIFICA UTENTE
              </p>
            </Link>
            <Link
              to='/settings'
              className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center gap-4 transform transition-all ease-linear duration-150 hover:scale-105 justify-center'
            >
              <img src='/images/set.png' className='w-10' alt='' />
              <p className='pt-2' style={{ lineHeight: '27px' }}>
                IMPOSTAZIONI
              </p>
            </Link>
          </div>

          {/* sezione badge */}
          <div className='flex flex-col items-end gap-7 xl:pr-20'>
            <h1 className='text-[28px] text-white btn_csl'>BADGE:</h1>
            <div className='flex items-center gap-5'>
              <Badge
                image='/images/pngwing 43.png'
                label='HTML'
                color='#0B13DC'
              />
              <Badge
                image='/images/pngwing 43.png'
                label='CSS'
                color='#28DC0B'
              />
              <Badge
                image='/images/pngwing 43.png'
                label='SASS'
                color='#DC180B'
              />
            </div>
          </div>

          {/* close button */}
          <div className='relative lg:absolute lg:bottom-4 lg:right-10'>
            <Link
              to='/close'
              className='text-[17px] lg:text-[27px] btn_primary text-white flex items-center transform transition-all ease-linear duration-150 hover:scale-105 justify-center'
            >
              <p className='pt-2' style={{ lineHeight: '27px' }}>
                CHIUDI
              </p>
              <img src='/images/pngwing 82.png' className='w-10' alt='' />
            </Link>
          </div>
        </div>
      </div>
    </Router>
  )
}

const Navbar = () => {
  return (
    <div className='bg-[#049CD8] border-b-[5px] relative border-b-[#CFFF4B] w-full xl:px-10 flex-wrap gap-3 px-4 lg:px-4 py-3 flex items-center justify-between'>
      <img
        src='/images/logo_scritta 5.png'
        className='xl:w-60 lg:w-40 w-32'
        alt=''
      />
      <div className='flex items-center relative  xl:gap-9 lg:gap-5 gap-x-5 flex-wrap lg:flow-nowrap'>
        <NavLink to='/' label='Home' />
        <NavLink to='/play' label='Gioca' />
        <NavLink to='/news' label='Novità' />
        <NavLink to='/contact' label='Contattaci' />
        <img
          src='/images/Frame.png'
          className='w-10 absolute hidden lg:block -top-0 lg:-left-[110px]'
          alt=''
        />
        <img
          src='/images/Frame1.png'
          className='w-9 absolute hidden lg:block top-[10px] left-20 lg:-left-[25px]'
          alt=''
        />
        <img
          src='/images/Frame1.png'
          className='w-9 absolute hidden lg:block top-[18px] left-[214px]'
          alt=''
        />
        <img
          src='/images/Frame1.png'
          className='w-9 absolute hidden lg:block -top-[20px] left-[414px]'
          alt=''
        />
        <img
          src='/images/Frame1.png'
          className='w-9 absolute hidden lg:block top-[16px] left-[600px]'
          alt=''
        />
      </div>

      <button className='bg-[#CFFF4B] relative z-40 rounded-[10px] text-[#019CD8] text-[14px] px-6 py-2'>
        Profilo utente
      </button>
    </div>
  )
}

const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className='cursor-pointer relative z-40 xl:text-[20px] lg:text-[16px] text-[#CFFF4B]'
      style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.60)' }}
    >
      {label}
    </Link>
  )
}

const Badge = ({ image, label, color }) => {
  return (
    <div className='w-24 relative'>
      <img src={image} alt='' />
      <div className='absolute top-[37px] w-full px-[2px]'>
        <div
          style={{ lineHeight: '20px' }}
          className={`text-white text-[20px] w-full flex items-center justify-center py-[8px] border-[2px] border-black bg-[${color}]`}
        >
          {label}
        </div>
      </div>
    </div>
  )
}
