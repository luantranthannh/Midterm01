import React from "react";

function Card(props) {
  const { title, subtitle, description, image } = props.item;
  return (
    <div>
      <div class="card">
        <h4>{title}</h4>
        <small>{subtitle}</small>
        <p>{description}</p>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}
export default Card;
