import React from 'react';
import '../css/card.scss';

const Card = ({image, title, description, key}) => {
  return (
    <div className="card" key={key}>
        <img src={image} alt={title} className="card-image"/>
        <h3 className="card-title">{title}</h3>
        <p className='description'>{description}</p>
        <button>Lire plus</button>
    </div>
  )
}

export default Card