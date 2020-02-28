import React from 'react';



function App() {
    const [course, setCourse] = React.useState("");
    const [courseList, setCourseList] = React.useState([]);
  
    const addCourse = () => {
      setCourseList([...courseList, course]);
      setCourse("");
    };
    
    const deleteAll = () => setCourseList([])
    
    const deleteItem = (index) => {
      const newArray = [...courseList];
      newArray.splice(index, 1);
      setCourseList(newArray);
    }
    
    const inputTextHandler = e => setCourse(e.target.value)
    return (
      <div>
        <Title color="red">Course List</Title>
        <TextInput placeholder="Enter a course" value={course} onChange={inputTextHandler}/>
        <Button onClick={addCourse} disabled={!course}>Add Course</Button>
        <ul>
          {courseList.map((item, index) => (
            <ListItem item={item} index={index} deleteItem={deleteItem}/>
          ))}
        </ul>
        {
          courseList.length > 0 &&
            <Button onClick={deleteAll}>Delete All</Button>
        }
  
      </div>
    );
  }
  
  function Button(props) {
    let buttonStyle ={
      color:  ''
    }
    return (
      <button style={buttonStyle} onClick=       {props.onClick} disabled={props.disabled}>{props.children}</button>
    )
  }
  
  function Title({children, color}) {
    return (
      <h1 style={{color}}>{children}</h1>
    )
  }
  
  function TextInput({placeholder,value, onChange}) {
    return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    )
  }
  
  function ListItem({item, index, deleteItem}) {
  
    function deleteHandler() {
      deleteItem(index)
    }
    return (
        <li>
          {item} 
          <span onClick={deleteHandler}> ❌</span>
        </li>
    )
  }
    


export default App;