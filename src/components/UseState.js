import React, { useState } from "react";
const UseState = () => {
  const [text, setText] = useState("곧 바뀝니당");
  const [color, setColor] = useState("black");
  const onClickEnter = () => {
    setText("어서오세요!")
  };

  const onClickLeave = () => {
    setText("어서가세요!")
  };
  return (
    <>
      <h1 style={{color}}>{text}</h1>
      <button onClick={onClickEnter}>드루와</button>
      <button onClick={onClickLeave}>나가</button><br />
      <button style={{color:'red'}} onMouseOver={() => setColor('red')}>빨강색</button>
      <button style={{color:'yellow'}} onMouseOver={() => setColor('yellow')}>노랑색</button>
      <button style={{color:'green'}} onMouseOver={() => setColor('green')}>초록색</button>
    </>
  );
}
export default UseState;