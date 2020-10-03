import React, { useState } from 'react';
import TodoCardList from './TodoCardList';

const TodoCard = ({ title, description, author }) => {

  function deleteTask(e) {
    console.log(e);
  }

  function finishTask(e) {
    console.log(e.title);
  }
  return (
    <>
      <div>
        <h3> Todo </h3>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="author">{author}</p>

        <button type="button" onClick={finishTask}>
          Finish task
        </button>

        <button type="button" onClick={deleteTask}>
          Delete task
        </button>
      </div>
    </>
  );
};

/*const finishTask = (title, description, author) => (
    
    let date = new Date()
    let completionTime = date.getDay() + "." + date.getMonth() + "." + date.getFullYear(); 
    let ttilte = title; 
    let ddescription = description; 
    let aauthor = author; 

); */


export default TodoCard;
