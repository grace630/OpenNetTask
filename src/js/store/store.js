import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/reducer.js', () => {
    store.replaceReducer(reducer);
  });
}
export default store;
