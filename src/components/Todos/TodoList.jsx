import React from 'react';
import TodoItem from './TodoItem.jsx';

// TODO: Add prop for todo list
// TODO: Add prop for removeTodo
// TODO: Add prop for completeTodo
// TODO: Loop todo list (todos)
// TODO: Add necessary props to <Todo /> item to be able to handle removeTodo and completeTodo (prop drilling)

const Todos = ({ toDo, removeToDo, completeTodo }) => {
return(
<ul id="todos">
    {toDo && toDo.length > 0 && (
        toDo.map((todo) => {
            
            <>
            <TodoItem
              toDo={todo}
              removeToDo={removeToDo}
              completeTodo={completeTodo}
            />
           </> 
           
        })
        )}
 </ul>
)}

export default Todos;
