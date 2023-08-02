import React from "react";

function Description(props) {
  return (
    <div>
      <p>Item ID: {props.itemID}</p>
      <p>Price: {props.price} gp</p>
      <p>As of: {props.timeStamp}</p>
    </div>
  );
}

export default Description;
