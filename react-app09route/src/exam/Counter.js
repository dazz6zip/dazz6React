import React, { useState } from "react";

const Counter = () => {
  const [member, setMember] = useState(0);

  const increase = () => {
    setMember(member + 1);
  };

  const decrease = () => {
    setMember(member - 1);
  };

  return (
    <div>
      <br />
      <br />
      <button onClick={increase}>추가</button>&emsp;
      <button onClick={decrease}>삭제</button>
      <br />
      🍥 {member} 명
    </div>
  );
};

export default Counter;
