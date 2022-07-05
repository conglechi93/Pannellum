import React from 'react';
import CardItem from './CardItem';

import './Cards.css';

import waterfall from '../../assets/images/img-9.jpg';
import bali from '../../assets/images/img-2.jpg';
import camel from '../../assets/images/img-8.jpg';
import football from '../../assets/images/img-4.jpg';
import ocean from '../../assets/images/img-3.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={waterfall}
              text="Discover hidden waterfalls deep within the Amazon forest"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={bali}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ocean}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={football}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={camel}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Thrill"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
