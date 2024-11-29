import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import { Todo } from './todo.model';
import { Route } from 'react-router-dom';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    // console.log(text);

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
