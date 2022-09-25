import React from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/List';

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

  const handleClick = React.useCallback((id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  }, [todoData]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일  목록</h1>
        </div>
        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}