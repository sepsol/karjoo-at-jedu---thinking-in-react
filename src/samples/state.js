// import React from 'react';
// import ReactDOM from 'react-dom';


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: 'Ford',
//             model: 'Mustang',
//             color: 'red',
//             year: 1964
//         }
//     }

//     // To change a value in the state object, use the this.setState() method.
//     changeColor = () => {
//         this.setState({color:'blue'});
//     }
//     // When a value in the state object changes, the component will re-render,
//     // meaning that the output will change according to the new value(s).

//     render() {
//         return(
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color} {this.state.model} from {this.state.year}.
//                 </p>
//                 <button
//                     type="button"
//                     onClick={this.changeColor}
//                 >Change Color</button>

//                 {/* this.changeColor => changeColor was defined as a method for class App, 
//                 and it was an event listener which means it didn't need () at the end} */}

//             </div>
//         );
//     }
// }
        
// /*
//     Always use the setState() method to change the state object,
//     it will ensure that the component knows its been updated and calls the render() method
//     (and all the other lifecycle methods).
// */


// ReactDOM.render(<App />, document.getElementById('root'));


// // LEARN MORE:
// // https://www.w3schools.com/react/react_state.asp