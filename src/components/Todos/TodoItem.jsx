import React from 'react';
import Title from '../Title';

// TODO: Add todo prop to show todo content from parent (TodoList)
// TODO: Add completedTodo prop handler to update state on parent
// TODO: Add removeTodo prop handler to update state on parent
// TODO: Add clickhandler on id="complete"
// TODO: Add clickhandler on id="remove"

const TodoItem = ({ toDo, removeToDo, completedToDo }) => (
  <article className="card">
    <header>
      <Title title={toDo.title} />
      <p>{toDo.description}</p>
      <p>{toDo.completion}</p>
    </header>
    <section>
      <button type="button" id="complete" onClick={() => completedToDo(toDo.id)}>Complete</button>
      <button type="button" id="remove" onClick={() => removeToDo(toDo.id)}>Remove</button>
    </section>
  </article>
);

export default TodoItem;
