import React from 'react';
import axios from "../axios";

function CompleteTodo({ todo, todos, setTodos }) {
  const handleTodoCompletion = async (id, is_completed) => {
    try {
      await axios.patch(
        `todo_api/update/${id}/`,
        { is_completed: is_completed },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        }
      );
      setTodos(
        todos.map((item) => (item.id === id ? { ...item, is_completed } : item))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <input
        className="checkbox checkbox-success checkbox-sm mx-2"
        type="checkbox"
        checked={todo.is_completed}
        onChange={() => handleTodoCompletion(todo.id, !todo.is_completed)}
      />
      <p className="mx-2 text-stone-300 text-xl">{todo.task}</p>
    </div>
  );
}

export default CompleteTodo;
