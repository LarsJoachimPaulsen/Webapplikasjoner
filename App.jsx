import React from 'react';
import Title from './src/components/Title';
import Navbar from './src/components/Navbar';
import TodoCard from './src/components/TodoCard';

const greeting = 'Todo';
const school = 'Hiof';
const user = 'bruker';

const App = () => {
  function deleteTheTask(e){
    console.log("task deleted");
  }
  return(
  <>
    <Navbar id="nav" leftText={school} rightText={user} />
    <Title title={greeting} />
    <TodoCard title="test" description="testest" author="kai" />
  </>
  );
};

export default App;
