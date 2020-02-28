import React, { useState } from 'react';

// Now let's think how we can remove singular items from the list
// let's pass our index to removeCourse() and the to our splice() method

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

    function removeCourse(index) {                      // to remove singular items from the list
        courseList.splice(index, 1);                    // there's a method called array.splice(), let's see what that does
        setCourseList([...courseList]);                 // now let's set the courseList to the new courseList array
    }                                                   // learn more at: https://www.w3schools.com/jsref/jsref_splice.asp


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
                        (item, index) => 
                            <li>
                                {index} {item}
                                <span onClick={ (index) => removeCourse(item) }> X</span>
                            </li>                       // if we add () to removeCourse() to write removeCourse(index) to pass index, we'll initiate it right away - we'll need to pass (index) through an arrow function - the (item) here refers to the item which is defined in .map(item) method
                    )                                   // for more info see: https://www.w3schools.com/jsref/jsref_map.asp
                }
            </ul>


        </div>
    );
}



export default App;