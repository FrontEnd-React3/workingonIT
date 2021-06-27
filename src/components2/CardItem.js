import React from "react";
import "../styles.css";
// https://coryrylan.com/blog/css-gap-space-with-flexbox
function CardItem(props) {
  return (
    <>
      <div className="cards__item">
        <div className="cards__item__link" to={props.path}>
          <figure>
            <img className="pfimg" src={props.src} alt="{props.src}" />
          </figure>
         <h4>{props.label}</h4>  <div className="cardstext">
          {props.text} <br /></div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
