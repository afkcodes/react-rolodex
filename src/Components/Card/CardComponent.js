import React from "react";
import "./CardStyles.css";

export const CardComponent = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt='Not Found'/>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
