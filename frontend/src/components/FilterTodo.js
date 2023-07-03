import React, { useState } from 'react'
import ListTodo from './ListTodo';

function FilterTodo({ setTodos, todos }) {
    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return todo.is_completed;
        if (filter === 'inactive') return !todo.is_completed;
        return true;
        });
        const completedTodos = todos.filter(todo => todo.is_completed);
        const incompletedTodos = todos.filter(todo => !todo.is_completed);
  return (
    <div className=''>
        <div className='text-center space-x-4 my-3'>
            <button className={filter === 'all' 
                  ? 'btn btn-outline btn-primary btn-active rounded-l-full'
                  :  'btn btn-outline btn-primary rounded-l-full'} 
            onClick={() => setFilter('all')}>All ({todos.length})</button>

            <button className={filter === 'active' 
                  ? 'btn btn-outline btn-accent btn-active rounded-none'
                  :  'btn btn-outline btn-accent rounded-none'}  
            onClick={() => setFilter('active')}>Completed ({completedTodos.length})</button>
            
            <button className={filter === 'inactive' 
                  ? 'btn btn-outline btn-secondary btn-active rounded-r-full'
                  :  'btn btn-outline btn-secondary rounded-r-full'}  
            onClick={() => setFilter('inactive')}>Incompleted ({incompletedTodos.length})</button>
        </div>

        <ListTodo setTodos={setTodos} filteredTodos={filteredTodos} todos={todos}/>
    </div>
  )
}

export default FilterTodo

// import React, { useState } from 'react';
// import ListTodo from './ListTodo';

// function FilterTodo({ setTodos, todos }) {
//   const [filter, setFilter] = useState('all');

//   const completedTodos = todos.filter(todo => todo.is_completed);
//   const incompletedTodos = todos.filter(todo => !todo.is_completed);

//   const handleFilterChange = filter => {
//     setFilter(filter);
//   };

//   return (
//     <div className="">
//       <div className="text-center space-x-4 my-3">
//         <button
//           className={`btn ${filter === 'all' ? 'btn-active' : ''}`}
//           onClick={() => handleFilterChange('all')}
//         >
//           All ({todos.length})
//         </button>

//         <button
//           className={`btn btn-accent ${filter === 'active' ? 'btn-active' : ''}`}
//           onClick={() => handleFilterChange('active')}
//         >
//           Completed ({completedTodos.length})
//         </button>

//         <button
//           className={`btn btn-secondary ${filter === 'inactive' ? 'btn-active' : ''}`}
//           onClick={() => handleFilterChange('inactive')}
//         >
//           Incompleted ({incompletedTodos.length})
//         </button>
//       </div>

//       <ListTodo
//         setTodos={setTodos}
//         filteredTodos={filter === 'active' ? completedTodos : filter === 'inactive' ? incompletedTodos : todos}
//         todos={todos}
//       />
//     </div>
//   );
// }

// export default FilterTodo;
