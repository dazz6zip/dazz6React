import React, { useState, useEffect } from "react";

const Clock03 = () => {
  // useState로 state 초기화
  const [date, setDate] = useState(new Date());

  // useEffect를 사용하면 내부적으로 생명주기 메소드 처리
  useEffect(() => {
    // 클래스의 componentDidMount()를 아래처럼 기술
    const timerId = setInterval(() => {
      refreshTime();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });
  const refreshTime = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>What t🍡me is it now?</h1>
      <h2> {date.toLocaleTimeString()}</h2>
    </div>
  );
};
export default Clock03;
