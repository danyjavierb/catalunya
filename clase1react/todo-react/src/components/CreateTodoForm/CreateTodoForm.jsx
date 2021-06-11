import React from "react";
import "./CreateTodoForm.css";

const CreateTodoForm = (props) => {
  return (
    <p>
      <label for="new-task">Add Item</label>
      <input id="new-task" type="text" />
      <button>Add</button>
    </p>
  );
};

export default CreateTodoForm;
