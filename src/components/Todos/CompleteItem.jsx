import React from 'react';

const CompleteItem = ({ completedToDo }) => (
  <tr>
    <th>{completedToDo.title}</th>
    <th>{completedToDo.description}</th>
  </tr>
);

export default CompleteItem;
