import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import TodoList from './TodoList.jsx';
import CompletedList from './CompleteList';

// TODO: Create CompletedList and CompletedItem components (they look like TodoList and TodoItem)
// TODO: Import Modal, TodoList, CompletedList, Title

const TodosContainer = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [toDo, setTodo] = useState([]);
  const [completedToDo, setCompletedToDo] = useState([]);

  const addTodo = () => {
    setTodo((prev) => [{id: toDo.length, ...formData},...prev ]);
    setModal(false);
    console.log(formData);
    console.log(toDo);
  };

  const removeTodo = (id) => {
    const newToDos = toDo.filter((todo) => todo.id !== id);
    setTodo(newToDos);
  };

  const completeTodo = (id) => {
    // TODO: Find todoItem
    const finishedTask = toDo.filter((todo)=> todo.id === id); 
    removeTodo(id);
    setCompletedToDo(finishedTask);
    console.log("finished task");
    console.log(completedToDo);
    // TODO: Update completedlist with todoItem (update state)
  };

  // TODO: Use <Modal /> with necessary props to handle addTodo, formdata and modal visbility
  // TODO: Finish clickhandler on Button to be able to toggle Modal
  // TODO: Conditional render todos (<p>Ingen todos</p>) when empty and <Title /> with <TodoList /> if not empty
  // TODO: Add necessary props to Title to render "Mine todos"
  // TODO: Add necessary props to TodoList to be able to handle removeTodo, completeTodo and render todos (props drilling)
  // TODO: Add necessary props to CompletedList to be able to render completed
  // TODO: Update console.log with correct function

  return (
    <div className="todosWrapper">
      {modal && (
        <Modal
          setFormData={setFormData}
          formData={formData}
          setModal={setModal}
          addTodo={addTodo}
        />
      )}
      <p>Modal goes here</p>
      <Button name="New todo" clickHandler={() => setModal(!modal)} />
      {toDo && toDo.length < 1 ? (
      <p>Ingen todos || Title and TodoList</p> 
      ) : (
        <>
          <TodoList
            removeToDo={removeTodo}
            completeTodo={completeTodo}
            toDo={toDo}
          />
        </>
      )}

      {completedToDo.length < 1 ?(
      <p>Ingen completed || CompletedList</p>
      ) : (
        <>
          <CompletedList

          />
        </>
      )}
    </div>
  );
};

export default TodosContainer;
