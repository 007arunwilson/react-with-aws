import React, { Component } from "react";
import "./style.css";

class Cognito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coginated: false,
      cognitoCredentials: {}
    };
  }

  // componentDidMount() {
  //   console.log("Compoenent Did Mount");
  // }

  cogniateApp() {

    console.log(global.config);

  }

  render() {
    return (
      <div className="module-coginate">
        <span>Coginated : {this.state.coginated.toString()}</span>
        <a
          className="coginate-act-btn"
          onClick={this.cogniateApp}
          href="javascript:void(0);"
        >
          {this.state.coginated ? "Un-Coginate" : "Coginate"} App
        </a>
      </div>
    );
  }
}

export default Cognito;
