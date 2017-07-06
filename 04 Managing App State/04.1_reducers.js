// Reducer - a function that returns a piece of the App's state

// Application State (a JS object)- Generated by reducers
// this example has two pieces of state, book and activeBook
{
  books: [{title: 'Harry Potter'}, {title: 'JavaScript'}] // books reducer
  activeBook: {title: 'JavaScript: the Good Parts'}       // activeBook reducer
}


// Writing a function that produces an array of books from state
// ./src/reducers/reducer_books.js

// 1. write the books reducer function and export
// this reducer will always return an array of books
export default function() {
  return [
    { title: 'Title 1' },
    { title: 'Title 2' },
    { title: 'Title 3' },
    { title: 'Title 4' }
  ]
}

// 2. Wire it into the application
// ./src/reducers/index.js

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// tell Redux how to create app state by passing objects to combineReducers()
const rootReducer = combineReducers({  // this fn maps  the app's state
  books: BooksReducer  // this adds the key 'books' to the global app state
});                    //   - key is the piece of state and val is reducer itself

export default rootReducer;

// continued //