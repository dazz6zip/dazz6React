import React, { useState } from "react";

const Calc = () => {
  const [countValue, setCountValue] = useState(2);
  const su = [];

  for (let i = 0; i < 10; i++) {
    su[i] = i + 1;
  }

  const calcPro = (e) => {
    setCountValue(e.target.value);
    // console.log(countValue);
  };

  return (
    <div className="App">
      <br />
      <b>
        <i className="notice">Input number!</i>
      </b>
      <br />
      <input type="text" value={countValue} onInput={calcPro}></input>
      <br /> <br />
      <table>
        {su.map((s) => (
          <tr>
            <td>{countValue} </td>
            <td> × </td>
            <td>{s}</td>
            <td> =</td>
            <td>{countValue * s}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Calc;
