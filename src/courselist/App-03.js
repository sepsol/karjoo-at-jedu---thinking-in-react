import React, { useState } from 'react';

// continue debugging input box

function App(props) {

    const [course, setCourse] = useState('');           // for the text input field
    const [courseList, setCourseList] = useState([]);   // for the unordered list

    function addCourseToList() {                        // for the 'Add Course' button
        setCourseList([...courseList, course]);         // adds the course entered in the input field to the courseList array, so that it can be added to the ul
    }

    function changeInput(event) {                       // to change text input's value
        console.log(event);                             // now we want to pass 'event' into the function to see what events is available to us, so that we can hopefully make the input field update as we type in it
    }                                                   // event is the click itself (from onClick) which initiated the function


    return(
        <div>


            <h1>Course List</h1>

            <input                                      // read-only as of now, because of value prop
                type="text" 
                placeholder="Enter a course name"
                value={course}                          // sets the value of text input field to be {course} which its initial value is ''
                onChange={changeInput}                  // trying to change input and get something out from the console
            ></input>

            <button 
                type="button"
                onClick={addCourseToList}               // initiates a function to add the course in input field to the courseList ul
            >Add Course</button>

            <ul>
                <li>
                    {courseList}                        {/* creates a loop to lists every item in the courseList array as li */}
                </li>
            </ul>


        </div>
    );
}



export default App;