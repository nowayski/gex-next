import React from "react";


function DropDown(props) {
const catVals = Object.values(props.dropDownList);

function selectionHandler(event){
    let val = event.target.textContent;
    props.clickCategory(val);
}

  return (
    <div className="dropdown">
      <button className="dropbtn">{props.buttonText}</button>
      <div className="dropdown-content">
        {catVals.map((val, index) => {
          return (
            <p id={index} onClick={selectionHandler} key={val}>
              {val}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default DropDown;
