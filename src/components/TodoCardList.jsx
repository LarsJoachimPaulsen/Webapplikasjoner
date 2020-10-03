import React from 'react';

const TodoCardList = ({ todo, removeTodo }) => {
  <ul>
    {todo &&
    todo.length > 0 &&
    todo.map((todo) => (
  
      <li>
        {todo.title}
        {todo.description}
        {todo.author}
      <button type="button"
       onClick={() => removeTodo(todo.id)} key={todo.id}>Delete task</button>
      <button type="button" onClick={() => addNewCard(todo.id)} key={todo.id}> Finish task </button>
      </li>
    ))}
  </ul>
  };

export default TodoCardList;
