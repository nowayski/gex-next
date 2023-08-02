import React, {useState} from "react";

function Selection(props){

    return <div><input className="selection-area" type="text" readOnly placeholder="Selection" value={props.newVal}/></div>;
}

export default Selection;