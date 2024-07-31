import React, { useState } from "react";

const Input01 = () => {
  const [txtValue, setTxtValue] = useState("");
  const changeFunc = (e) => {
    setTxtValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={txtValue} onInput={changeFunc}></input>
      <br />
      🥨 <b>{txtValue}</b>
    </div>
  );
};

export default Input01;
