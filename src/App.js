import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/UIComponents/Navbar/Navbar";
import { Route } from "react-router-dom";
import { AboutAWSSDK } from "./Containers/Intro";
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
                "https://s3-us-west-2.amazonaws.com/cyberinfoscripter/aws-logo.jpeg"
              }
              className="App-logo-2"
              alt="logo"
            />
          </div>
          <h1 className="App-title">Welcome to React with AWS</h1>
          <p>
            A Experimental project for running react with aws by the support AWS
            official &nbsp;<a
              href="https://github.com/aws/aws-sdk-js"
              target="_blank"
            >
              Javascript SDK
            </a>
          </p>
        </header>
        {/* Nav Links - Starts */}
        <Navbar />
        {/* Nav Links - Ends */}

        {/* Page contents - Starts */}
        <div className="page-contents">
          <Route path="/" exact component={AboutAWSSDK} />
        </div>
        {/* Page contents - Ends */}
      </div>
    );
  }
}

export default App;
