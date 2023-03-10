import React from 'react';
import { Link } from 'react-router-dom';
import '../css/card.scss';

const CardActuality = ({image, title, description, key, id}) => {
  return (
    <Link to={`/news/${id}`} className="card" key={key}>
        <img src={image} alt={title} className="card-image"/>
        <h3 className="card-title">{title}</h3>
        <p className='description'>{description}</p>
        <button>Voir plus</button>
    </Link>
  )
}

export default CardActuality