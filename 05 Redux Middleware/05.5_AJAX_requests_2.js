// Create reducer for handling the FETCH_WEATHER Actio
// new file ./reducers/reducer_weather

export default function(state = [], action) {
  switch (action.type) {
    case types.FETCH_WEATHER:
      //return state.concat([action.payload.data]); // concat returns a new instance
      return [action.payload.data, ...state];
  }
  return state;
}

// make sure the reducer is being used
// ./reducers/index
import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'; // import reducer

const rootReducer = combineReducers({  // add to combineReducers call
  weather: WeatherReducer // responsible for 'state.weather'
});

export default rootReducer;

// redux-promise middleware explaination - allows simple asynchronous code
// flow
// Click => ActionCreator => Action returned => Middleware => Reducer (new state)
// ActionCreator - index.js fetchWeather() fn makes AJAX request assigned to const
//  - the const 'request' is a promise returned from axios as the payload on ret obj
// Middleware - redux-promise  ???
// Reducer - weather reducer is returning the action from fetchWeather()
//  - the action is a response with request data, NOT the promise
//
// redux-promise Middleware - sees the incoming Action's payload property from AC
// - if the payload is a promise, redux-promise stops action
// - when request finishes, it dispatches a new action of same type but with a
//   payload of the resolved request with the request data
//    * ie 'unwraps' the promise



// avoiding state mutations in reducers
// ./reducers/reducer_weather

// what part of the request data unpacked from redux-promise do we want to save?
// 'action.payload.data' from 'FETCH_WEATHER()' Action is what we need
//   log the incoming Action object to console to check out properties to decide

// what data structure to store weather state? want mult rows for mult cities
// - array will be a good fit

export default function(state = [], action) { // initialize state as an array
  switch (action.type) {   // we need a switch statement to handle only the
    case FETCH_WEATHER:    // 'FETCH_WEATHER' action type
      return [action.payload.data, ...state]; // array as we will have mult cities
  }                                           // with wanted data from the Action
  return state;                               // ' ...state]' portion means we add
} // new state instance is returned           // new city to current state (ES6)
                                              // * NOT changing state directly *
