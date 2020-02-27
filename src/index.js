import React from 'react';
import ReactDOM from 'react-dom';


// import App from ./App


class App extends React.Component {
    
    constructor() {
        super();
        this.state = {greeting:"Hello"};
    }

    render() {
        return(
            <div>
                
                <h1>{this.state.greeting} {this.props.audience}!</h1>
                <p>Let's start learning <code>JavaScript REACT</code> together!</p>

            </div>
        )
    }
    
}


// export default App
ReactDOM.render(<App audience="World"/>, document.getElementById('root'));