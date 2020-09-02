import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Quick Notes</h1>
      </header>
      <Form inputTest={inputText} todos ={todos}  setTodos={setTodos} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
