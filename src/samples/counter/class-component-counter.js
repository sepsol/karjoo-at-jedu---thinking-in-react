// import React from 'react';


// class ClassComponentCounter extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0 // initial value of the counter
//         }
//     }


//     // for setState() to work, we have to create a new method called: incrementCount = () => {}

//     incrementCount = () => {
//         this.setState( {count: this.state.count + 1} ); // passing an object to setState()
//     }

//     // The object contains the part of the state object we want to update
//     // which, in this case, is the value of count



//     render() {
//         return(
//             <div>
//                 <h1>Class Component Counter</h1>
//                 <p>You clicked {this.state.count} times</p>
                
//                 <button onClick={this.incrementCount}>
//                     Click Me!
//                 </button>
//             </div>
//         );
//     }
// }


// export default ClassComponentCounter;

// // LEARN MORE:
// // https://youtu.be/lAW1Jmmr9hc?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A