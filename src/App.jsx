import React from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import TodosContainer from './components/Todos/TodosContainer';

// TODO: Add TodosContainer
const App = () => (
  <>
    <Navbar />
    <Layout>
      <TodosContainer />
    </Layout>
  </>
);

export default App;
