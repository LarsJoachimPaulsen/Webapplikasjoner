import React from 'react';
import CompleteItem from './CompleteItem';

const CompleteList = ({ completedToDo }) => (
  <table>
    <thead>
      <tr>
        <th> Title </th>
        <th> description </th>
      </tr>
    </thead>
    <tbody>
      {completedToDo &&
        completedToDo.length > 0 &&
        completedToDo.map((completedTodos) => {
          console.log(completedTodos.id);
          return(
          <CompleteItem
            key={completedTodos.id}
            completedToDo={completedTodos}
          />
          )
        })}
    </tbody>
  </table>
);
export default CompleteList;
