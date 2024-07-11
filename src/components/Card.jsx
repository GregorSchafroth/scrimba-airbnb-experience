import React from 'react'
import cardImage from '../images/katie-zaferes.png'
import starImage from '../images/star.png'


const Card = (props) => {
  return (
    <div className="card">
    <img src={`../../src/images/${props.img}`} className="card--image" />
    <div className="card--stats">
        <img src="../../src/images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
    </div>
    <p>{props.title}</p>
    <p><span className="bold">From ${props.price}</span> / person</p>
</div>
  )
}

export default Card