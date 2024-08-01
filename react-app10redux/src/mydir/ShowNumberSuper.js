import React, { Component } from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component {
  render() {
    return (
      <div id="super">
        <h2>Show Number Super</h2>
        {/* 
        this.props.number : {this.props.number}
        <ShowNumber number={this.props.number}></ShowNumber> */}
        <ShowNumber></ShowNumber>
      </div>
    );
  }
}
