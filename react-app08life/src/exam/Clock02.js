import React, { Component } from "react";

class Clock02 extends Component {
  // Class Component : props로 기본 constructor 호출
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // state를 생성자에서 지정
  }

  /*  Mount : DOM 객체가 생성되고 브라우저에 나타나는 것
  메소드 호출 순서
  1. constructor : 컴포넌트 클래스의 생성자 함수로 컴포넌트를 만들 때 처음으로 호출
  2. getDerivedStateFromProps : props와 state 값을 동기화
  3. render : 컴포넌트의 기능과 모양새를 정의, 리액트 요소 반환
  4. componentDidMount : 컴포넌트를 생성하고 첫 렌더링이 끝났을 때 호출 */

  /* Component 출력 자료가 DOM에 렌더링된 후 실행되기 때문에 시간과 관련된 작업을 하기에 적당 */
  componentDidMount() {
    // system(react)에 의한 콜백
    this.timerId = setInterval(() => {
      // setInterval() : 일정 시간 간격을 두고 반복 호출
      this.refreshTime();
    }, 1000);
  }

  refreshTime() {
    this.setState({
      // 여기서 state는 date
      date: new Date(),
    });
  }

  componentWillUnmount() {
    // system(react)에 의한 콜백
    // 사용된 메모리 등의 작업 마무리 필요
    // SPA를 개발할 때는 메모리 누수(leak)를 방지하는 작업 필요
    clearInterval(this.timerId); // setInterval() 해제
  }

  render() {
    return (
      <div>
        <h1>What time is it n🥨w?</h1>
        <h2> {new Date().toLocaleTimeString()}</h2>
        <h2>now : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock02;
