import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="span-plus" > + </span>
            <img
              src={
                "https://mms.businesswire.com/media/20180509006648/en/656774/23/AWS_logo_RGB.jpg"
              }
              className="App-logo-2"
              alt="logo"
            />
          </div>
          <h1 className="App-title">Welcome to React with AWS Cognito</h1>
          <p>Use aws sdk safely in frontend with cognito poolid</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
