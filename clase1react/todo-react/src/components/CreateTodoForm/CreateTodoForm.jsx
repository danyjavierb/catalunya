import React, { useRef } from "react";
//importar los actions que necesitamos
import { addTodoAction } from "../../state/actions/todoActions";
// import connect
import { connect } from "react-redux";
import "./CreateTodoForm.css";

const CreateTodoForm = (props) => {
  const inputElementRef = useRef();

  const addNewTodo = (ev) => {
    const title = inputElementRef.current.value;
    // actualizar el estado
    props.addTodo(title);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title) => dispatch(addTodoAction(title)),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodoForm);
