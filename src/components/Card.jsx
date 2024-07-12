import React from 'react'
import cardImage from '../images/katie-zaferes.png'
import starImage from '../images/star.png'


const Card = (props) => {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  
  return (
    <div className="card">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={`../../src/images/${props.img}`} className="card--image" />
      <div className="card--stats">
          <img src="../../src/images/star.png" className="card--star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><strong className="bold">From ${props.price}</strong> / person</p>
    </div>
  )
}

export default Card