import React,{useState} from "react";
const Counter = props => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => {setNumber(number+1);console.log("changed");}}>+1</button>
    </div>
  );
};
export default Counter;