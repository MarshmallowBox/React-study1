import React, { useState } from "react";
const Info = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && "보이냥"}
      <hr />
    </>
  );
};
export default Info;
