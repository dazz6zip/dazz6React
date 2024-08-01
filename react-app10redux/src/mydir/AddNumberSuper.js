import React, { Component } from "react";
import AddNumber from "./AddNumber";

export default class AddNumberSuper extends Component {
  render() {
    return (
      <div id="super">
        <h2>Add Number Super</h2>
        {/* AddNumber의 props로 매개변수가 size인 함수 전달
            이 함수는 AddNumber의 + 버튼을 클릭했을 때 AddNumber의 state.size 호출
            size 값을 다시 상위 컴포넌트 App으로 전달해야 하기 때문에
            상위 컴포넌트로부터 전달받은 props의 onClick 함수를 호출하여 size 값을 전달
             */}
        {/* <AddNumber
          onClick={function (size) {
            this.props.onClick(size);
          }.bind(this)}
        ></AddNumber> */}
        <AddNumber></AddNumber>
      </div>
    );
  }
}
