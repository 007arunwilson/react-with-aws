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
            <h4 className="intro-inner-heading">
              Best Practices for Credentials
            </h4>
            Properly setting credentials ensures that your application or
            browser script can access the services and resources needed while
            minimizing exposure to security issues that may impact mission
            critical applications or compromise sensitive data. An important
            principle to apply when setting credentials is to always grant the
            least privilege required for your task. It's more secure to provide
            minimal permissions on your resources and add further permissions as
            needed, rather than provide permissions that exceed the least
            privilege and, as a result, be required to fix security issues you
            might discover later. For example, unless you have a need to read
            and write individual resources, such as objects in an Amazon S3
            bucket or a DynamoDB table, set those permissions to read only. For
            more information on granting the least privilege, see Best Practices
            in the IAM User Guide.
            <pre className="intro-warning-pre">
              Warning<br />
              While it is possible to do so, we recommend you not hard code
              credentials inside an application or browser script.<br /> Hard
              coding credentials poses a risk of exposing your access key ID and
              secret access key.
            </pre>
            <br />
            For more info : 
            <br />
            <a
              href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html"
              target="_blank"
            >
              https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html
            </a>
            <br />
            {/* What we are gonna is create a AWS cognito pool ID, please go through : 
            <a
              href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html"
              target="_blank"
            >
              https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html
            </a> to get an Idea why we are doing this. */}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
