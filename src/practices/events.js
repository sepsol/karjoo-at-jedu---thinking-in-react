// /* 
// Just like HTML, React can perform actions based on user events.
// React has the same events as HTML:

//     change
//     click
//     dblclick
//     mouseover
//     mouseout
//     keydown
//     load

// React events are written in camelCase syntax:
//     onClick  instead of  onclick.

// React event handlers are written inside curly braces:
//     onClick={shoot}  instead of  onclick="shoot()". 

// React:  <button onClick={shoot}>Take the Shot!</button>
// HTML:   <button onclick="shoot()">Take the Shot!</button>


// A good practice is to put the event handler as a method in the component class.

// For methods in React, the this keyword should represent the component that owns the method.
// That is why you should use arrow functions. With arrow functions,
// this will always represent the object that defined the arrow function.
// */
// import React from 'react';
// import ReactDOM from 'react-dom';



// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.bindedRegFunc = this.bindedRegFunc.bind(this);
//     }


//     regularFunc() {
//         alert(this);    // returns undefined
//     }

//     // In class components, the this keyword is not defined by default,
//     // so with regular functions the this keyword represents the object that called the method,
//     // which can be the global window object, a HTML button, or whatever.


//     arrowFunc = () => {
//         alert(this);    // returns [object Object]
//     }

//     // The 'this' keyword refers to the component object

//     // If you must use regular functions instead of arrow functions,
//     // you have to bind this to the component instance using the bind() method:

//     bindedRegFunc() {
//         alert(this);    // returns [object Object]
//     }

//     // Without the binding, the this keyword would return undefined.


//     render() {
//         return(
//             <div>
//                 <h1>Events</h1>
//                 <button onClick={this.regularFunc}>this. in a regular functions</button>
//                 <br/><br/>
//                 <button onClick={this.arrowFunc}>this. in an arrow functions</button>
//                 <br/><br/>
//                 <button onClick={this.bindedRegFunc}>binded this. in a regular functions</button>
//             </div>
//         );
//     }
// }


// ReactDOM.render(<App />, document.getElementById('root'));

// // LEARN MORE:
// // https://www.w3schools.com/react/react_events.asp