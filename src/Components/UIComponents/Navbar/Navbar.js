import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="main-nav">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to={"/"}>About AWS SDK</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/aws-modules"}>AWS Modules</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/repo-n-credits"}>Repo &amp; Credits</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
