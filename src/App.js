import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export default function App() {
  const [todoData, setTodoData] = React.useState([]);
  const [value, setValue] = React.useState("");

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
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}