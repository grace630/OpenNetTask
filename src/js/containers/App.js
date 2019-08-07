import React from 'react';
import { connect } from 'react-redux';
import action from '../actions/action';
import { iniState } from '../reducers/reducer';
import LoginComponent from '../components/LoginComponent';
import UserListsComponent from '../components/UserListsComponent';
import CardComponent from '../components/CardComponent';
import ConditionsComponent from '../components/ConditionsComponent';

const App = ({
  state = iniState,
  fetchLoginData,
  fetchUserLists,
  filterUserLists
}) => {
  let allUsers = null;
  let filUsers = null;
  if (state.userLists) {
    allUsers = state.userLists.map((data, index) => {
      return <CardComponent data={data} key={index} />;
    });
  }
  if(state.filterUsers){
    filUsers = state.filterUsers.map((data, index) => {
      return <CardComponent data={data} key={index} />;
    });
  }
  return (
    <div>
      <LoginComponent fetchLoginData={fetchLoginData} loginData={state.loginData} />
      {state.token ? <UserListsComponent fetchUserLists={fetchUserLists} token={state.token} userLists={state.userLists} /> : null}
      {allUsers}
      {state.userLists ? <ConditionsComponent allUsers={state.userLists} filterUserLists={filterUserLists} /> : null}
      {filUsers}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};
const mapDispatchToProps = dispatch => ({
  fetchLoginData: () => dispatch(action.fetchLoginData()),
  fetchUserLists: (token) => dispatch(action.fetchUserLists(token)),
  filterUserLists: () => dispatch(action.filterUserLists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);