import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import jobReducer from '../reducers/JobReducer'
  
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const reducers = combineReducers({
      jobs: jobReducer
  })

  export const store = createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(thunk)
      )
  );