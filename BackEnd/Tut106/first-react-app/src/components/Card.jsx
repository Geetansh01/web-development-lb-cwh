import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <div className="desciption">
            <h3>{props.desc}</h3>
        </div>
    </div>
  )
}

export default Card
