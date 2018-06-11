import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import CognitoModule from "./Modules/Cognito";
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

    console.log(this.props);
  }

  render() {
    let modules_key = Object.keys(this.state.modules);

    const modules_list_template = modules_key.map(i => {
      return (
        <div key={i} className="card">
          <Link
            to={this.props.location.pathname + "/" + this.state.modules[i].link}
          >
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

    return (
      <div className="modules">
        {this.props.match.isExact ? (
          <div className="modules-list">{modules_list_template}</div>
        ) : (
          <div className="modules-content">
            <Route
              path={`${this.props.match.url}/aws-cognito`}
              component={CognitoModule}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(AWSModules);
