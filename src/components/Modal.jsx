import React from 'react';

const Modal = ({ addToDo, setFormData, formData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo();
  };

  const updateTitleValue = (event) => {
    event.preventDefault();
    setFormData({
      title: event.target.value,
    });
  };

  const updateDescriptionValue = (event) => {
    event.preventDefault();
    setFormData({
      description: event.target.value,
    });
  };

  const updateAuthorValue = (event) => {
    event.preventDefault();
    setFormData({
      author: event.target.value,
    });
  };


  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <input value={formData.title} onChange={updateTitleValue} />
        <input value={formData.description} onChange={updateDescriptionValue} />
        <input value={formData.author} onChange={updateAuthorValue} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Modal;
