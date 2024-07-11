import React from 'react'
import cardImage from '../images/katie-zaferes.png'
import starImage from '../images/star.png'


const Card = () => {
  return (
    <div className='card'>
      <img className='card--image' src={cardImage} alt="person" />
      <div className='card--stats'>
        <img className='card--star' src={starImage} alt="star icon" />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div> 
      <p>Life lessons with Katie Zaferes</p>
      <p><strong>From $136</strong> / person</p>
    </div>
  )
}

export default Card