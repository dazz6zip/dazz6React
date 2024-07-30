import React, { useState } from "react";

const UnitConv = () => {
  let [inputValue, setInputValue] = useState(1);
  let [outputValue, setOutputValue] = useState(inputValue * 100);

  const ipvHdr = (e) => {
    setInputValue(e.target.value);
    setOutputValue(inputValue * 100);

    // alert(e.target.value);
  };

  const opvHdr = (e) => {
    setOutputValue(e.target.value);
    setInputValue(outputValue / 100);
  };

  return (
    <div className="App">
      <tr>
        <th>m</th>
        <th></th>
        <th>cm</th>
      </tr>
      <tr>
        <td>
          <input id="ipv" onInput={ipvHdr} value={inputValue}></input>
        </td>
        <td>=</td>
        <td>
          <input id="opv" onInput={opvHdr} value={outputValue}></input>
        </td>
      </tr>
    </div>
  );
};

export default UnitConv;
