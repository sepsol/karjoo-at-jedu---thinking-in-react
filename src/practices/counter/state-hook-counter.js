// /*
//     Hooks are a new addition in React 16.8.

//     Hooks are functions with names starting with 'use',
//     to add state variables to functional components
//     and instrument the lifecycle methods of class components.

//     They let you use state and other React features without writing a class.


//     useState is a named export from react so to use it, you can write:
//         import React from 'react';    
//         React.useState();
    
//     Or to import it just write useState:
//         import React, { useState } from 'react;
//         useState();

    
//     >>> const [a, b] = useState(c);

//     useState() takes the initial value (c) of the state variable as an argument.
//     The initial value will be assigned only on the initial render
//     (if it’s a function, it will be executed only on the initial render).

//     useState() then returns the current value (a) of state property
//     and a method (b) that is capable of updating that state property (a).

//     In subsequent renders (due to a change of state in the component or a parent component),
//     the argument of the useState hook will be ignored and the current value will be retrieved.

//     so:
//         a = state value
//         b = a method to update (a)
//         c = initial state value
// */

// import React, { useState } from 'react';


// function StateHookCounter(props) {
    
//     const [count,setCount] = useState(0); // useState(0) = initial value of the counter
//     // [count, setCount] is an array destructuring (ES6 feature)

//     function handleCount() {
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <h1>State Hook Counter</h1>
//             <p>You clicked {count} times</p>

//             <button onClick={ handleCount }>
//                 Click Me!
//             </button>
            
//         </div>
//     );

// }


// export default StateHookCounter

// // LEARN MORE:
// // https://reactjs.org/docs/hooks-overview.html
// // https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A


// /*
//     Unlike the state object that you can declare in a class,
//     which allows you to declare more than one state variable, like this:

//         class Message extends React.Component {
//             constructor(props) {
//                 super(props);

//                 this.state = {
//                     message: '',
//                     list: [],    
//                 };
//             }

//             // some code
//         }


//     The useState hook allows you to declare only one state variable (of any type) at a time,
//     like this:

//         const Message= () => {
//             const messageState = useState( '' );
//             const listState = useState( [] );
//         }


        
//     =================================================
//     ARRAY DESTRUCTURING:
//     =================================================

//     const aphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

//     const a = alphabet[0];  // returns A
//     const c = alphabet[2];  // returns C


//     const [a,,c] = alphabet;
//         // a == A
//         // c == C

//     -------------------------------------------------

//     function sumAndMultiply(a, b) {
//         return [a+b, a*b];
//     }

//     const [sum, multiply] = sumAndMultiply(2, 3);
    
//     console.log(sum);       // returns 5
//     console.log(multiply);  // returns 6
// */