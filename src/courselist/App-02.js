import React, { useState } from 'react';

// let's see what's going wrong with our input box

function App(props) {

    const [course, setCourse] = useState('');           // for the text input field
    const [courseList, setCourseList] = useState([]);   // for the unordered list

    function addCourseToList() {                        // for the 'Add Course' button
        setCourseList([...courseList, course]);         // adds the course entered in the input field to the courseList array, so that it can be added to the ul
    }

    function changeInput(event) {                       // to change text input's value
        console.log("you're close!");                   // let's see what happens when we console log onChange, it should output something when you're trying to type in the input field
    }


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