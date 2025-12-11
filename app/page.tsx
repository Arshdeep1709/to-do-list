import React from "react";

const App = () => {
  return(
    <>
    <h3>My To-do list</h3>
    <form>
      <input type="text" placeholder="Enter task"/>
      <textarea name="" rows={1} placeholder="Enter description"></textarea>
      <button>Add</button>
    </form>
    </>
  )
}

export default App