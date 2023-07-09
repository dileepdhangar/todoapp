import React from 'react'

function TodoList(props) {
  return (
    <div>

      <li className="list-item">
        {props.item}
        <span className="icons">
          <i className="fa-solid fa-trash-can-clock"></i>
        </span>
        onClick = {e => {
          props.deleteItem(props.index)
        }}
      </li>

    </div>
  );
}

export default TodoList 