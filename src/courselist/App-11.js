import React, { useState } from 'react';

// Now let's think how we can remove singular items from the list
// first we need to index everything on the list

function App(props) {

    const [course, setCourse] = useState('');           // for the text input field
    const [courseList, setCourseList] = useState([]);   // for the unordered list

    function addCourseToList() {                        // for the 'Add Course' button
        setCourseList([...courseList, course]);         // adds the course entered in the input field to the courseList array, so that it can be added to the ul
        setCourse('');                                  // let's make it so that after the user clicks 'Add Course' to add a course to their list, their input box get emptied for them automatically
    }

    function changeInput(event) {                       // to change text input's value
        setCourse(event.target.value);                  // we now need to combine the result of two last steps together
    }                                                   // Yay!!

    function clearCourseList() {                        // to clear the list
        setCourseList([]);                              // sets the value in courseList array to be empty after this function is initiated with 'Clear List' button
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

            <button
                type="button"
                onClick={clearCourseList}
            >Clear List</button>

            <ul>
                {
                    courseList.map(                     // .map is a method that we can run on arrays like courseList. it creates a loop and calles each item in the array recursively
                        (item, index) => <li>{index} {item}</li>   // let's assign an identifier index to every item on the list
                    )                                   // for more info see: https://www.w3schools.com/jsref/jsref_map.asp
                }
            </ul>


        </div>
    );
}



export default App;