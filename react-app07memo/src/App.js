import React, { useState } from "react";
import Child from "./mydir/Child";

function App() {
  /*
  App Component(함수)가 호출될 때 함수 내에 있는 내용을 차례대로 수행(렌더링)
  React는 부모 Component가 렌더링될 때 자식 Component 또한 렌더링됨
  성능 최적화를 목적으로 Component에서 필요한 상황에서만 자식 Component가 리렌더링에 참여할 수 있도록
  React.memo 함수를 제공함
  */

  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  /* 이벤트 핸들러 : FatherAge 변경 */
  const changeFatherAge = () => {
    setFatherAge(fatherAge + 1);
  };

  /* 이벤트 핸들러 : ChildAge 변경 */
  const changeChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("Change Father's age (rendering)");

  const boxStyle = { border: "2px solid", padding: "10px" };
  return (
    <div style={boxStyle}>
      <h2>👨🏻 Father : ft</h2>
      <h4>Age : {fatherAge}</h4>
      <button onClick={changeFatherAge}>Change!</button>
      <hr />
      <Child irum="cd2nd" nai={childAge}></Child>
      <button onClick={changeChildAge}>Change!</button>
    </div>
  );
}

export default App;
