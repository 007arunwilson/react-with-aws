import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="main-nav">
        <ul>
          <li>
            <a href="/">About AWS SDK</a>
          </li>
          <li>
            <a href="/aws-modules">AWS Modules</a>
          </li>
          <li>
            <a href="/repo-n-credits">Repo &amp; Credits</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
