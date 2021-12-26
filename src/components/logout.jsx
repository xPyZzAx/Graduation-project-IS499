import React, { Component } from "react";
import auth from "../Services/authService";
class Logout extends React.Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;