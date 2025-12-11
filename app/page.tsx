"use client"

import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const formSubmit = (e) => {
    e.preventDefault()
    console.log(task)
    console.log(description)
    setTask("")
    setDescription("")
  }
  return(
    <>
    <h3>My To-do list</h3>
    <form onSubmit={formSubmit}>
      <input type="text" placeholder="Enter task" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
      <textarea name="" rows={1} placeholder="Enter description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
      <button>Add</button>
    </form>
    </>
  )
}

export default App