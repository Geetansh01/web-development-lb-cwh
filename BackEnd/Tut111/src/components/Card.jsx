import React from 'react'
import './Card.css'

const Card = ({props}) => {
  return (
    <div className="card">
        <img src="https://wallpapercave.com/wp/wp1909378.jpg" alt="card image" />
        <div className="content">
            <div className="id">{props.userId}</div>
            <div className="userId">{props.id}</div>
            <div className="title">{props.title}</div>
            <div className="body">{props.body}</div>
        </div>
    </div>
  )
}

export default Card
