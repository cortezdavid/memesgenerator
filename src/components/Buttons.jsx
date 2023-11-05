import React from 'react'
import DownloadButton from './DownloadButton'

const Buttons = ({ cambiarMeme, Reiniciar }) => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap w-100">
      <button onClick={cambiarMeme} className='button2'> Cambiar meme</button>
      <button onClick={Reiniciar} className='button2'>Reiniciar</button>
      <DownloadButton />
    </div>
  )
}

export default Buttons