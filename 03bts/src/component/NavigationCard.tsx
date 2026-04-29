import React from 'react'

interface CurrentProps{
  image: string;
  nick: string;
}

export default function NavigationCard({image, nick}: CurrentProps) {
  return (
    <div className='member-card'>
      <img src={image} alt="" className="photo" />
      <h2 className="nick">{nick}</h2>
      <p className="team">BTS</p>
    </div>
  )
}


