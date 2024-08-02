import React, { Component } from "react";
import Store from "../store";

export default class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h2>Add Number</h2>
        {/* + 버튼 클릭시 size 값이 상위 컴포넌트로 전달될 수 있도록 onClick 구현 
            props로 전달받은 onClick 함수 호출, 현재 컴포너틑의 state인 size 값 전달
            onClick 함수는 AddNumberSuper에서 작성  */}
        {/* <input
          type="button" 
          value="+"
          onClick={function () {
            this.setState({ size: this.state.size + 1 });
            this.props.onClick(this.state.size + 1);
          }.bind(this)}
        ></input> */}
        {/* Redux 사용 */}
        <input
          type="button"
          value="+"
          onClick={function () {
            Store.dispatch({ type: "INCREMENT", size: this.state.size });
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onInput={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
