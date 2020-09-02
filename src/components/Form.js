import React from "react";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }; 

  const submitTodoHandler = (e) => {
      e.preventDefault();

  }

  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
