import React from 'react'

import Btn from '../Body/Btn';
import { useState } from 'react';




const botton = [
  {
    title: "Add",
    variant: "primary"
  },
  {
    title: "Has",
    variant: "secondary"
  },
]





const Sass = () => {

const [count, setCount] = useState(0);
const handleClick = (title) =>{
  if(title === "Add"){
    setCount(count + 1)
  }else{
    setCount(count - 1)
  }

}
    return (
      <div>
      <h1>Counter: {count}</h1>
      {botton.map((item) => (
        <Btn
        a={item.title}
        b={item.variant}
        handleClick={handleClick}
        />
      ))}
      </div>


    );
};
export default Sass;