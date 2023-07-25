import React from 'react'
import { shareGif } from '../helpers/shareGifs'

export const GifItem = ({url,id,title}) => {
    
  
  return (
    <div className="card" >
        <img src={url} alt={title} width="150px" /><br />
        <p>{title}</p> 
        <button className='Compartir-b' onClick={shareGif}>SHARE!</button>
    </div>
  )
}


