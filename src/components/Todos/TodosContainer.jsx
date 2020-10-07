import React, { useState } from 'react';
import Button from './TodoButton';
import Modal from '../Modal';
import TodoList from './TodoList.jsx';
import CompleteList from './CompleteList';

// TODO: Create CompletedList and CompletedItem components (they look like TodoList and TodoItem)
// TODO: Import Modal, TodoList, CompletedList, Title

const TodosContainer = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', author: '' });
  const [toDo, setTodo] = useState([]);
  const [completedToDo, setCompletedToDo] = useState([]);

  const addTodo = () => {
    setTodo((prev) => [{id: toDo.length, ...formData},...prev ]);
    setModal(false);
  };

  const removeTodo = (id) => {
    const newToDos = toDo.filter((todo) => todo.id !== id);
    console.log(newToDos);
    setTodo(newToDos);
  };

  const completeTodo = (id) => {
    const finishedTask = toDo.find((todo) => todo.id === id);
    console.log("lengde " + completedToDo.length);
   // finishedTask.id = completedToDo.length;
    console.log(finishedTask);
    setCompletedToDo((prev) => [{ ...finishedTask}, ...prev]);
    removeTodo(id);
    // TODO: Update completedlist with todoItem (update state)
  };

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
<div>
      {completedToDo.length < 1 ?(
      <p>Ingen completed || CompletedList</p>
      ) : (
        <>
          <CompleteList
            completedToDo={completedToDo}
          />
        </>
      )}
</div>      
    </div>
  );
};

export default TodosContainer;
