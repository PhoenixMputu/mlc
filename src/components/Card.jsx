import React from 'react';
import '../css/card.scss';
import { GrLocation, GrFormCalendar } from "react-icons/gr";
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Card = ({image, title, place, date, hour, key, id}) => {
  return (
    <Link to={`/events/${id}`} className="card" key={key}>
        <img src={image} alt={title} className="card-image"/>
        <h3 className="card-title">{title}</h3>
        <div className="card-footer">
            <div><GrLocation size={20} color="black"/><p>{place}</p></div>
            <div><GrFormCalendar size={22} color="black"/><p>{date}</p></div>
            <div><BiTime size={20} color="black"/><p>{hour}</p></div>
        </div>
    </Link>
  )
}

export default Card