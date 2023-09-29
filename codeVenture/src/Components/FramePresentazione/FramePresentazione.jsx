import React from 'react'
import './FramePresentazione.css'
import imageBorder from '../../assets/image/Screenshot_2023-09-29_alle_17.59.12__2_-removebg-preview.png'
import imageBg1 from '../../assets/image/Screenshot_2023-09-29_alle_18.23.38__2_-removebg-preview.png'
import imageBg2 from '../../assets/image/IMG_4255.png'

export const FramePresentazione = () => {
  return (
    <div className='frame-container'>
      <img src={imageBorder} alt='Border' className='border-image' />
      <img src={imageBg1} alt='Background1' className='bg-image left' />
      <img src={imageBg2} alt='Background2' className='bg-image right' />
      <div className='flex justify-center p-12'>
        <video
          className='video w-2/3 rounded-3xl'
          controls
          src='./src/assets/video/presentazioneCodeVenture.mp4'
        ></video>
      </div>
    </div>
  )
}
