import React from 'react';
import './App.css';
import List from './components/List';

export default function App() {
  const [todoData, setTodoData] = React.useState([]);
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData(prev => [...prev, newTodo]);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일  목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}>
          </input>
          <button type="submit">입력</button>
        </form>
      </div>
    </div>
  )
}