import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image, setActiveCard }) => {
  return (
    <div className="collection-card" onClick={() => setActiveCard(id)}>
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">.#{id}</div>
        </div>

        <div className="price-container">
          <img src={weth} alt="" className="weth-image" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
