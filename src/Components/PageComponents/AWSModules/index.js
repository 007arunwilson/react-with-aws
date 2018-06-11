import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class AWSModules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: {
        aws_cognito: {
          name: "AWS Cognito",
          link: "aws-cognito",
          background:
            "https://sanderknape.com/wp-content/uploads/2017/02/aws_cognito.png"
        }
      }
    };
  }

  render() {
    let modules_key = Object.keys(this.state.modules);

    console.log(modules_key);

    const modules_list_template = modules_key.map(i => {
      return (
        <div key={i} className="card">
          <Link to={this.state.modules[i].link}>
            <img src={this.state.modules[i].background} />
            <div className="container">
              <h4>
                <b>{this.state.modules[i].name}</b>
              </h4>
            </div>
          </Link>
        </div>
      );
    });

    return <div className="modules" >{modules_list_template}</div>;
  }
}

export default AWSModules;
