import React, { useState, useEffect } from "react";
import "./styles.css";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";

function App() {
  const [data, setData] = useState([]);

  function handleChange(id) {
    setData((prevState) => {
      const items = [...prevState];
      const itemToChange = items.find((item) => item.id === id);
      itemToChange.completed = !itemToChange.completed;
      return items;
    });
  }

  async function fetchData() {
    fetch(`fakeApiUrl`)
      .then((res) => res.json())
      .then((returnData) => {
        // setData(returnData);
      });
    await new Promise((resolve) => {
      setTimeout(() => resolve(setData(todosData)), 5000);
    });
  }

  function postData() {
    fetch("fakeApiPostRoute", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then(console.log);
  }

  const singleTodo = data.map((item) => (
    <TodoItem
      item={item}
      key={item.id}
      text={item.text}
      handleChange={handleChange}
    />
  ));

  useEffect(() => {
    fetchData();
  }, []);

  return data.length > 0 ? (
    <div className="todo-list">
      <h3>{singleTodo}</h3>
      <button onClick={postData}>Save Changes to Server</button>
    </div>
  ) : (
    <button onClick={fetchData}>Load Data</button>
  );
}
export default App;
