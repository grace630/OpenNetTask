import React from 'react';
import { connect } from 'react-redux';
import action from '../actions/action';
import { iniState } from '../reducers/reducer';
import OpConfigComponent from '../components/OpConfigComponent';

const App = ({
  state = iniState,
  fetchLoginData,
}) => {
  return (
    <OpConfigComponent fetchLoginData={fetchLoginData} configData={state.loginData} />
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};
const mapDispatchToProps = dispatch => ({
  fetchLoginData: () => dispatch(action.fetchLoginData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);