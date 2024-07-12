import React from 'react'
import cardImage from '../images/katie-zaferes.png'
import starImage from '../images/star.png'


const Card = (props) => {
  let badgeText
    if (props.datum.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.datum.location === "Online") {
        badgeText = "ONLINE"
    }
  
  return (
    <div className="card">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={`../../src/images/${props.datum.coverImg}`} className="card--image" />
      <div className="card--stats">
          <img src="../../src/images/star.png" className="card--star" />
          <span>{props.datum.stats.rating}</span>
          <span className="gray">({props.datum.stats.reviewCount}) • </span>
          <span className="gray">{props.datum.location}</span>
      </div>
      <p>{props.datum.title}</p>
      <p><strong className="bold">From ${props.datum.price}</strong> / person</p>
    </div>
  )
}

export default Card