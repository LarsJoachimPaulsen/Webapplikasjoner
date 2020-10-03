import React from 'react';

const Modal = () => (
  <div id="blur-box">
    <div id="form-box">
      <div className="upper-box">
        <h4>New Todo</h4>
        <button className="x-btn" id="x-btn">Submit</button>
      </div>
      <div className="lower-box">
        <label>Title</label>
      </div>
    </div>
  </div>
);

export default Modal;
