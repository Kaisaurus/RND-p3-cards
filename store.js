import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(
  applyMiddleware(
    promise(),
    thunk,
    createLogger(),
  )
);


export default createStore(reducers, middleware);
