//import React from 'react';
//import ReactDOM from 'react-dom';

// This is a functional component
//const Welcome = () => {
  //return <h1>Hello World!</h1>;
//}

//ReactDOM.render(
  //<Welcome />,  // Use <Welcome /> instead of <welcome>
  //document.getElementById("root")
//);

import React, { useReducer } from 'react';

// Define a reducer function
//const reducer = (state, action) => {
  //switch (action.type) {
    //case 'INCREMENT':
     // return { count: state.count + 1 };
    //case 'DECREMENT':
      //return { count: state.count - 1 };
   // default:
     // return state;
 // }
//};

function Counter() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

//export default Counter;


import React from 'react';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <h1>Contact Details Form</h1>
      <ContactForm />
    </div>
  );
}

export default App;

