import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (todoText.trim()) {
      if (editingId) {
        setTodos(todos.map(todo => 
          todo.id === editingId ? { ...todo, text: todoText } : todo
        ));
        setEditingId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: todoText }]);
      }
      setTodoText(''); 
    }
  };

  const editTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setTodoText(todo.text);  //main value
    setEditingId(id);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder={editingId ? 'Edit your todo' : 'Add a new todo'}
      />
      <button onClick={handleSubmit}>
        {editingId ? 'Save Edit' : 'Add Todo'}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
