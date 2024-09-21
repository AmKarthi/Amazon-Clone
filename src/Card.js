import React from 'react';
import './Card.css';   

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
