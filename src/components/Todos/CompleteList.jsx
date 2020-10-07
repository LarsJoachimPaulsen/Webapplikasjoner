import React from 'react';
import CompleteItem from './CompleteItem';

const CompleteList = ({ completedToDo }) => (
  <table>
    <thead>
      <tr>
        <th> Title </th>
        <th> description </th>
        <th> Author </th>

      </tr>
    </thead>
    <tbody>
      {completedToDo &&
        completedToDo.length > 0 &&
        completedToDo.map((completedTodos, index) => (
          //console.log(completedTodos.id);
          <CompleteItem
            key={index}
            completedToDo={completedTodos}
          />
      
        ))}
    </tbody>
  </table>
);
export default CompleteList;
