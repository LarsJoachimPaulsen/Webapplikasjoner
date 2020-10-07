import React from 'react';

// Modal delegates formhandling to its parent
const Modal = ({ addTodo, setFormData, formData, setModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  // Function for handling more than one inputfield
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <section id="modal">
      <section className="modal_inner_wrapper">
        <header>
          <h3>New todo</h3>
          <button type="button" onClick={() => setModal(false)}>
            X
          </button>
        </header>
        <form id="todo_form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input id="title" value={formData.title} onChange={updateValue} name="title" />
          <label htmlFor="description">Description</label>
          <input id="descripton" value={formData.description} onChange={updateValue} name="description" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Modal;
