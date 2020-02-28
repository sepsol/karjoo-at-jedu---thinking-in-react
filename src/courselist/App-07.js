import React, { useState } from 'react';

// Yay! input box fixed, but now our listing is weird

function App(props) {

    const [course, setCourse] = useState('');           // for the text input field
    const [courseList, setCourseList] = useState([]);   // for the unordered list

    function addCourseToList() {                        // for the 'Add Course' button
        setCourseList([...courseList, course]);         // adds the course entered in the input field to the courseList array, so that it can be added to the ul
    }

    function changeInput(event) {                       // to change text input's value
        setCourse(event.target.value);                  // we now need to combine the result of two last steps together
    }                                                   // Yay!!


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
                    {courseList}                        {/* as you can see there's a bug in our listing method, let's fix it by using array.map() method */}
                </li>
            </ul>


        </div>
    );
}



export default App;