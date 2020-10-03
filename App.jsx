import React, { useState } from 'react';
import Title from './src/components/Title';
import Navbar from './src/components/Navbar';
import Modal from './src/components/Modal';
import TodoCardList from './src/components/TodoCardList';
//import TodoButton from './src/components/TodoButton';

const greeting = 'Todo';
const school = 'Hiof';
const user = 'bruker';

const App = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', author: '' });
  const [todo, setTodo] = useState([]);

  const addToDo = () =>{
    setTodo((prev) => [{ id: todo.length, ...formData }, ...prev]);
  };

  const removeToDo = (id) => {
    //const newTodo = todos.filter{(todo) => todo.id !== id}; 
    setTodo(newTodo); 
  };
  return(
  <>
    <Navbar id="nav" leftText={school} rightText={user} />
    <Title title={greeting} />
    {todo && todo.length < 1 ? (
      <p> Ingenting å gjøre</p>
    ) : (
      <TodoCardList removeTodo={removeToDo} todo={todo} />
    )}
    {modal && (
      <Modal 
        addToDo={addToDo}
        setFormData={setFormData}
        formData={formData}
      />
    )}
    <button onClick={() => setModal(!modal)}>Toggle Modal</button>
  </>
  );
};

export default App;
