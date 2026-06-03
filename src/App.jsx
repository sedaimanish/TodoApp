import MainSection from "./MainSection.jsx";
import "./App.css";
import ListSection from "./ListSection.jsx";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todoText, todoDate) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoText,
      date: todoDate,
    };
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodo = (idtoDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idtoDelete);
    setTodos(updatedTodos);
  };
  return (
    <>
      <MainSection onAddTodo={handleAddTodo} />
      <ListSection todos={todos} onDeleteTodo={handleDeleteTodo} />;
    </>
  );
}

export default App;
