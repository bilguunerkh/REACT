import { Button } from "react-bootstrap";
import React from "react";

const Btn = (props) => {
    return (
      <Button variant={props.b} onClick={()=>{
        props.handleClick(props.a);
      }}>{props.a}</Button>
    );
  };
  
export default Btn;