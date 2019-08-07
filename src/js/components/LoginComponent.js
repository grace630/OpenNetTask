import React, { Component } from 'react';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: null,
      token:'',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loginData: nextProps.loginData,
      token: nextProps.loginData.token
    });
  }

  render() {
    let message = '';
    if (this.state.loginData) {
      message = this.state.loginData.token;
     }
    return (
      <div>
        <button type="button" onClick={this.props.fetchLoginData}>Step 1: Get Login API Data.</button>
        <div id="display">{message}</div>
      </div>
    );
  }
}

export default LoginComponent;