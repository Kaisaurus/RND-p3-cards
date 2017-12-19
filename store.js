import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import { persistStore, persistCombineReducers } from 'redux-persist'

const config = {
  key: 'primary',
  storage
}

let reducer = persistCombineReducers(config, reducers)

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(thunk)
  )
)

const persistor = persistStore(store)
// persistor.purge() // purge store for testing

export default { store, persistor }

// const middleware = []

// if (__DEV__) { middleware.push(createLogger()) }
// const reducers = persistCombineReducers(config, reducers)
// const enhancers = [applyMiddleware(...middleware)]

// const store = createStore(reducers, undefined, compose(...enhancers))
// // const persistor = persistStore(store, persistConfig, () => {
// //   //console.log(store.getState());
// // });
// const configureStore = () => {
//   return { store }
//   // return { persistor, store }
// }

// export default configureStore


// import { createStore, compose, applyMiddleware } from 'redux'
// import { persistStore, persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
// import { createLogger } from 'redux-logger'
// import reducers from './reducers'

// const config = {
//   key: 'root',
//   storage,
//   //debug: true //to get useful logging
// };

// const middleware = []

// if (__DEV__) { middleware.push(createLogger()) }
// const reducers = persistCombineReducers(config, reducers)
// const enhancers = [applyMiddleware(...middleware)]
// const persistConfig = { enhancers }
// const store = createStore(reducers, undefined, compose(...enhancers))
// const persistor = persistStore(store, persistConfig, () => {
//   //console.log(store.getState());
// });
// const configureStore = () => {
//   return { persistor, store }
// }

// export default configureStore