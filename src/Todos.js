import React from 'react'
import TodoItems from './TodoItems';
import './Todos.css';

const Todos = ({ Proptodos, DeleteTodo }) => {
  return (
    <div id='todoid' className='container my-3'>
      <h3 className='text-center'>Todos List</h3>
      {Proptodos.length === 0 ? "No Pending Todos" :
        Proptodos.map((allarrays) => <TodoItems key={allarrays.sno} Proptodoitem={allarrays} DeleteTodoItem={DeleteTodo} />)
      }
    </div>
  )
}

export default Todos; 
