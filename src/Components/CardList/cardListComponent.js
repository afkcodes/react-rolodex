import React from "react";
import "./cardListStyles.css";
import { CardComponent } from "../Card/CardComponent";

export const CardList = (props) => {
    console.log(props)
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
