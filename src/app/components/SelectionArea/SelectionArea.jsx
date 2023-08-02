import React, { useState } from "react";
import DropDown from "./DropDown";
import Selection from "./Selection";
import categories from "../../DataFiles/categories";

function getKeyByValue(value) {
  return Object.keys(categories).find((key) => categories[key] === value);
}

function SelectionArea(props) {
  const [categoryValue, setCategoryValue] = useState("");
  const [letterValue, setLetterValue] = useState("");
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function getValueFromList(val) {
    setCategoryValue(val);
  }

  function getValueOfAlphabet(letterVal) {
    setLetterValue(letterVal);
  }

  function clickHandler() {
    let cat = getKeyByValue(categoryValue);
    let letter = letterValue;
    props.getInfo(cat, letter);
  }

  return (
    <div className="grid-container">
      <div className="grid-item">
        <DropDown
          clickCategory={getValueFromList}
          dropDownList={categories}
          buttonText={"Category"}
        />
        <Selection newVal={categoryValue} />
      </div>
      <div className="grid-item">
        <DropDown
          clickCategory={getValueOfAlphabet}
          dropDownList={alphabet}
          buttonText={"First Letter"}
        />
        <Selection newVal={letterValue} />
      </div>
      <div className="grid-item">
        <form onSubmit={props.sendRequest}>
          <input
            type="submit"
            onClick={clickHandler}
            className="grid-button"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default SelectionArea;
