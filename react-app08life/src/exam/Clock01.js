import React, { Component } from "react";

class Clock01 extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <h1>What time is it n🥟w?</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock01;
