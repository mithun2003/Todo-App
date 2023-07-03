import React, { useState } from "react";
import axios from "../axios";
import jwt_decode from "jwt-decode";

function AddTodo({ setTodos, todos }) {
  const [newTodo, setNewTodo] = useState("");
  const accessToken = localStorage.getItem("access"); // Retrieve the access token from storage

  const decodedToken = jwt_decode(accessToken);
  const userId = decodedToken.user_id; // Assuming the user ID is stored in the "user_id" claim

  console.log(userId); // Use the user ID as needed
  const handleAddTodo = async () => {
    if (!newTodo) return;

    const res = await axios.post(
      "todo_api/create/",
      { task: newTodo, user: userId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`
        }
      }
    );
    console.log(res.data);
    setTodos([res.data, ...todos]);
    setNewTodo("");
  };
  return (
    <div className="mx-auto text-center content-center">
      <input
        type="text"
        className="input input-success rounded-l-full w-full max-w-xs m-5"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />

      <button
        className="btn btn-success rounded-r-full"
        onClick={handleAddTodo}
      >
        ADD TODOD
      </button>
    </div>
  );
}

export default AddTodo;
