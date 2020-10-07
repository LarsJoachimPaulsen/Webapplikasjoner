import React from 'react';
import CompleteItem from './CompleteItem';

const CompleteList = ({ completedTodo }) => (
  <table>
    <thead>
      <tr>
        <th> Title </th>
        <th> description </th>
      </tr>
    </thead>
    <tbody>
      {completedTodo &&
        completedTodo.length > 0 &&
        completedTodo.map((completedTodos) => (
            console.log("completed title" + completedTodos.title)
          <CompleteItem completedTodo={completedTodos} />
        ))}
    </tbody>
  </table>
);
export default CompleteList;
