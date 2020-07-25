import React from "react";
import "./searchBoxStyle.css";

export const SearchBox = (props) => (
  <input
    className="search"
    type="search"
    placeholder={props.placeHolder}
    onChange={props.onHandleChange}
  />
);


