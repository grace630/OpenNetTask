import React, { Component } from 'react';

class UserListsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLists: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        userLists: nextProps.userLists,
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.props.fetchUserLists(this.props.token)}>Step 2: Get User Lists.</button>
      </div>
    );
  }
}

export default UserListsComponent;