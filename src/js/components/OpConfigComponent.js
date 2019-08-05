import React, { Component } from 'react';

class OpConfigComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configData: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      configData: nextProps.configData,
    });
  }

  render() {
    let configList = 'Click button to login API';
    if (this.state.configData) {
      const arr = Object.values(this.state.configData);
      configList = '';
      arr.forEach((element) => {
        configList += JSON.stringify(element);
      });
    }
    return (
      <div>
        <button type="button" onClick={this.props.fetchLoginData}>Get login API data.</button>
        <div id="display">{configList}</div>
      </div>
    );
  }
}

export default OpConfigComponent;