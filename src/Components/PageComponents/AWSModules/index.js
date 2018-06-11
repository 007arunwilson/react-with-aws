import React, { Component } from "react";

class AWSModules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: {
        aws_cognito: {
          name: "AWS Cognito",
          link: "aws-cognito",
          background:"https://sanderknape.com/wp-content/uploads/2017/02/aws_cognito.png"
        }
      }
    };
  }

  render() {

    let modules_list_template = [];

    let modules_key = Object.keys(this.state.modules);

    console.log(modules_key);
    
    return(
      <div>
        {modules_list_template}
      </div>
    );

  }
}

export default AWSModules;
