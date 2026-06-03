import "./MainSection.css";
import { useState } from "react";

function MainSection({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please type a TODO");
      return;
    }
    onAddTodo(inputValue, todoDate);
    setInputValue("");
    setTodoDate("");
  };

  return (
    <>
      <h1>Todolist App</h1>
      <div className="main">
        <input
          className="input"
          type="text"
          placeholder="Type any todo lists"
          id="todotext"
          value={inputValue}
          onChange={handleChange}
        />

        <input
          type="date"
          id="todo-date"
          name="date"
          className="dateSelector"
          value={todoDate}
          onChange={handleDateChange}
        />

        <button className="addbtn" id="addBtn" onClick={addTodo}>
          Add
        </button>
      </div>
    </>
  );
}

export default MainSection;
