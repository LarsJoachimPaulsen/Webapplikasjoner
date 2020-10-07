import React from 'react';
import Title from '../Title';

const TodoItem = ({ toDo, removeToDo, completeTodo }) => (
  <article className="card">
    <header>
      <Title title={toDo.title} />
      <p>{toDo.description}</p>
      <p>{toDo.completion}</p>
      <p>{toDo.author}</p>
    </header>
    <section>
      <button type="button" id="complete" onClick={() => completeTodo(toDo.id)}>Complete</button>
      <button type="button" id="remove" onClick={() => removeToDo(toDo.id)}>Remove</button>
    </section>
  </article>
);

export default TodoItem;
