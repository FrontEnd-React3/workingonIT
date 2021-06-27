import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import groupa from "../imgcopy/GroupA.jpg";
function Cards() {
  return (
    <div className="cards">
      {/* //lime */}
      <div className="cards__container">
        <CardItem
          className="cardstext"
          id="amazonshop"
          key="1"
          src={groupa}
          text=" &#8226; React &#8226; FireBase &#8226; Styled Components"
          date=" 12/06/2021"
          label="Amazon Shop"
          path="/services1"
        />
        <CardItem
          className="carditem"
          src="images/img-2.jpg"
          text="Travel through the Islands of Bali in a Private Cruise"
          label="Luxury"
          path="/services2"
        />

        <CardItem
          className="carditem"
          src="images/img-3.jpg"
          text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          label="Mystery"
          path="/services"
        />
        <CardItem
          className="carditem"
          src="images/img-4.jpg"
          text="Experience Football on Top of the Himilayan Mountains"
          label="Adventure"
          path="/products"
        />
        <CardItem
          className="carditem"
          src="images/img-8.jpg"
          text="Ride through the Sahara Desert on a guided camel tour"
          label="Adrenaline"
          path="/sign-up"
        />
      </div>
    </div>
  );
}

export default Cards;
