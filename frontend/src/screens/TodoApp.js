import React, { useState, useEffect } from 'react'
import axios from '../axios'
import { isExpired }  from "react-jwt";
import AddTodo from '../components/AddTodo';
import FilterTodo from '../components/FilterTodo';
import Header from '../components/Header';


function TodoApp() {
    const [todos, setTodos] = useState([]);
    console.log("access",isExpired(localStorage.access));
    console.log("refresh",isExpired(localStorage.refresh));

    useEffect( () => {
                
                axios.get('todo_api/', { headers: { Authorization: `Bearer ${localStorage.access}` } })
                .then(res => setTodos(res.data))
                .catch(err => console.error(err));
                console.log("axios call else");

    }, []);

    return (
        <>
        <Header/>
        <div className='container mx-auto p-[25px] w-[60%] bg-base-200 rounded-[25px] h-auto mt-[10px]'>
            <AddTodo setTodos={setTodos} todos={todos}/>
            <FilterTodo setTodos={setTodos} todos={todos}/>
        </div>
        </>
    )
}

export default TodoApp