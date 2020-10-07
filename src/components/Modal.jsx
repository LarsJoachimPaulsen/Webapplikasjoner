import React from 'react';

// Modal delegates formhandling to its parent
// TODO: Add necessary props to be able to handle addTodo, setFormdata, formData, setModal
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

  // TODO: Update console.log with correct function
  // TODO: Add onChange method to input
  // TODO: Add value to input title (make input a "controlled" input)
  // TODO: Add value to input description (make input a "controlled" input)
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
