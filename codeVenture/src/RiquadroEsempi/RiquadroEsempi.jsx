import { useState } from 'react'
import imageLine2 from '../assets/image/Screenshot_2023-09-29_alle_18.45.23__2_-removebg-preview.png'
import imageBgOne from '../assets/image/Screenshot_2023-09-29_alle_18.54.47__2_-removebg-preview.png'
import imageBgTwo from '../assets/image/Screenshot_2023-09-29_alle_18.56.22__2_-removebg-preview.png'

function RiquadroEsempio() {
  const [src, setSrc] = useState('./src/assets/image/image1.jpg')
  const [activeButton, setActiveButton] = useState('ESEMPIO 1')

  const buttonColorPress = 'w-1/4 h-8 verdeScuro rounded-xl pixelFont font-bold'
  const buttonColorHold = 'w-1/4 h-8 verdeChiaro rounded-xl pixelFont font-bold'

  const handlerClickImg = (e, imgSrc) => {
    setActiveButton(e.target.innerText)
    setSrc(imgSrc)
  }

  const getButtonClassName = (buttonText) => {
    return buttonText === activeButton ? buttonColorPress : buttonColorHold
  }

  return (
    <div className='flex flex-col gap-4 p-5 rounded-xl  mx-auto'>
      <img
        src={imageLine2}
        className='w-80 h-auto self-start mt-4'
        alt='Image Line 2'
      />
      <div className='flex justify-around'>
        <button
          className={getButtonClassName('ESEMPIO 1')}
          onClick={(e) => handlerClickImg(e, './src/assets/image/image2.jpg')}
        >
          ESEMPIO 1
        </button>
        <button
          className={getButtonClassName('ESEMPIO 2')}
          onClick={(e) => handlerClickImg(e, './src/assets/image/image1.jpg')}
        >
          ESEMPIO 2
        </button>
        <button
          className={getButtonClassName('ESEMPIO 3')}
          onClick={(e) => handlerClickImg(e, './src/assets/image/image3.jpg')}
        >
          ESEMPIO 3
        </button>
      </div>
      <div className='relative flex items-center justify-between'>
        <img src={imageBgOne} className='w-1/6 rounded-xl' alt='Image BG One' />
        <img
          src={src}
          className='rounded-xl bg-green-600 w-2/3'
          alt='Current Image'
        />
        <img src={imageBgTwo} className='w-1/6 rounded-xl' alt='Image BG Two' />
      </div>
    </div>
  )
}

export default RiquadroEsempio
