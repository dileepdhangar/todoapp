import React, { useState } from "react"
import './TodoInput.css'


function TodoInput() {

  let [inputtext, setInputText] = useState("");

  return (
    <div className="input-container">

      < input
        type="email"
        className=" input-box-todo"
        placeholder="Enter your ToDo Bruh ..."
        onChange={e => {

          setInputText = (e.target.value)

        }}

      />

      <button className="add-btn"> + </button>

      <div>{inputtext}</div>


    </div>

  )
}

export default TodoInput
