import React from "react";
import "./styles.css";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";

function App() {
  const singleTodo = todosData.map((item) => (
    <TodoItem item={item} key={item.id} text={item.text} />
  ));
  return (
    <div className="todo-list">
      <h3>{singleTodo}</h3>
    </div>
  );
}

export default App;
