import React from "react";

export const AboutAWSSDK = () => (
  <div className="App-intro-container">
    <p className="App-intro">
      <h4 className="intro-inner-heading">
        What Is the AWS SDK for JavaScript?
      </h4>
      The AWS SDK for JavaScript provides a JavaScript API for AWS services you
      can use to build applications for Node.js or the browser. The JavaScript
      API lets developers build libraries or applications that make use of AWS
      services.
      <br />
      <img
        className="aws-sdk-info-img"
        src="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/images/sdk-overview.png"
      />
      <br />
      Not all services are immediately available in the SDK. To find out which
      services are currently supported by the AWS SDK for JavaScript, see{" "}
      <a
        target="_blank"
        href="https://github.com/aws/aws-sdk-js/blob/master/SERVICES.md"
      >
        https://github.com/aws/aws-sdk-js/blob/master/SERVICES.md
      </a>.
      <br />
      For more info :
      <br />
      <a
        href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html"
        target="_blank"
      >
        https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html
      </a>
      <br />
    </p>
  </div>
);
