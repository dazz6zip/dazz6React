import React, { memo } from "react";

const boxStyle = { border: "1px solid darkolive", padding: "10px" };
// function Child({irum, nai}) {}

const Child = ({ irum, nai }) => {
  console.log("Change Child's age (rendering)");
  return (
    <div style={boxStyle}>
      <h2>👧🏻 Child 1 : cd1st</h2>
      <h4>Age : 5</h4>
      <h2>👦🏻 Child 2 : {irum}</h2>
      <h4>Age : {nai}</h4>
    </div>
  );
};

// export default Child;
export default memo(Child);
// 반환 Component에 memo 함수 사용 -> React.memo 기능 활성화
