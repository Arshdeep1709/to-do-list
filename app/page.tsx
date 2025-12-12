"use client"

import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {task, description}])
    // console.log(task)
    // console.log(description)
    setTask("")
    setDescription("")
    console.log(mainTask)
  }

  const deleteHandler = (indx) => {
    let copyTask = [...mainTask]
    copyTask.splice(indx,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task available !!</h2>
  if(mainTask.length > 0){
    renderTask =  mainTask.map((tsk,indx)=>{
          return(
            <>
            <li key={indx}>
            <div className="data2">
              <h5>{tsk.task}</h5>
              <h5>{tsk.description}</h5>
            </div>
            <button onClick={()=>{deleteHandler(indx)}}>X</button>
            </li>
            </>
          )
  })
  }
  return(
    <>
    <h3>My To-do list</h3>
    <form onSubmit={formSubmit}>
      <input type="text" placeholder="Enter task" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
      <textarea name="" rows={1} placeholder="Enter description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
      <button>Add</button>
    </form>
    <hr/>
    <div className="data">
    <ul>
      {renderTask}
    </ul>
    </div>
    </>
  )
}

export default App