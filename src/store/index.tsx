import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/rootReducer';


const devMiddleware = composeWithDevTools(
  applyMiddleware(
    thunk,
    reduxImmutableStateInvariant()
  )
);

const middleware = devMiddleware;
const store = createStore(
  rootReducer,
  {},
  middleware
);

export default store;

