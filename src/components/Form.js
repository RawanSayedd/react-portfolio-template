import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Your E-mail</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" type="text" placeholder="Type your message here!" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
