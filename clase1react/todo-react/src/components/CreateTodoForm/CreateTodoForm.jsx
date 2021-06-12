import React, { useRef } from "react";
import "./CreateTodoForm.css";

const CreateTodoForm = (props) => {
  const inputElementRef = useRef();

  const addNewTodo = (ev) => {
    const title = inputElementRef.current.value;
    // actualizar el estado
    inputElementRef.current.value = "";
  };

  return (
    <p>
      <label for="new-task">Add Item</label>
      <input ref={inputElementRef} id="new-task" type="text" />
      <button onClick={addNewTodo}>Add</button>
    </p>
  );
};

export default CreateTodoForm;
