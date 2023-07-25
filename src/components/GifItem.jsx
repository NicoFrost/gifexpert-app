import React from 'react'

export const GifItem = ({url,id,title}) => {
    
  return (
    <div className="card" >
        <img src={url} alt={title} width="150px" /><br />
        <p>{title}</p>
    </div>
  )
}


