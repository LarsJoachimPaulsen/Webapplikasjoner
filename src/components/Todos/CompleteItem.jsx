import React from 'react';

const CompleteItem = ({ CompletedTodo }) => (
  <tr>
    <th>{CompletedTodo.title}</th>
    <th>{CompletedTodo.description}</th>
  </tr>
);

export default CompleteItem;
