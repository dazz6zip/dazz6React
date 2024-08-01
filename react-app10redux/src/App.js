import "./App.css";
import React, { Component } from "react";
import ShowNumberSuper from "./mydir/ShowNumberSuper";
import AddNumberSuper from "./mydir/AddNumberSuper";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>ᓚᘏᗢ Main</h1>
        {/* App 소유 state 변수 number + size (AddNumberSuper가 전달한 값) */}
        {/* <AddNumberSuper
          onClick={function (size) {
            this.setState({ number: size });
          }.bind(this)}
        ></AddNumberSuper>
        state.number : {this.state.number}
        <ShowNumberSuper number={this.state.number}></ShowNumberSuper> */}
        <AddNumberSuper></AddNumberSuper>
        <ShowNumberSuper></ShowNumberSuper>
      </div>
    );
  }
}

export default App;
