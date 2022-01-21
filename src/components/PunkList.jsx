import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";
const PunkList = ({ listData, setSelectedIndex }) => {
  const setActiveCard = (id) => {
    setSelectedIndex(id);
  };
  return (
    <div className="punk-list">
      {listData.map((item) => {
        return (
          <div>
            <CollectionCard
              key={item.id}
              name={item.name}
              price={item.name}
              traits={item.traits}
              image={item.image_url}
              id={item.token_id}
              setActiveCard={setActiveCard}
            />
          </div>
        );
      })}
    </div>
  );
};
export default PunkList;
