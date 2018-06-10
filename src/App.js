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
            <span className="span-plus"> + </span>
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
        <div className="App-intro-container">
          <p className="App-intro">
            What we are gonna is create a AWS cognito pool ID, please go through : 
            <a
              href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html"
              target="_blank"
            >
              https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html
            </a> to get an Idea why we are doing this.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
