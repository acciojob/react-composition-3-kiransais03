import React, { useState } from "react";

let Tooltip = (props)=>{


    let [hover,setHover]=useState(false);
    function mouse1function () {
        console.log("hi");
            setHover(true);
      }
    
      function mouse2function () {
        console.log("bye");
        setHover(false);
      }


    return (<>
    {hover && <span className="tooltiptext" style={{backgroundColor:"red",fontWeight:"bold",fontSize:"30px"}}>{props.text}</span>}
    <div className="tooltip" onMouseEnter={mouse1function} onMouseLeave={mouse2function}>
      {props.children}
    </div>
      </>
    )
}

export default Tooltip;
