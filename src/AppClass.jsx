import { Component } from "react";

import "./App.css";

export default class AppClass extends Component {
  createComp() {
    return this.props.data.map((image) => {
      return <img key={image.id} src={image.img} />;
    });
  }

  render() {
    return (
      <div id="classComponent">
        <h3>{this.props.title}</h3>

        <div className="grid">{this.createComp()}</div>
      </div>
    );
  }
  // code here
}
