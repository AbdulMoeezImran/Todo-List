import React from 'react'

export const TodoItems = ({Proptodoitem, DeleteTodoItem}) => {
  return (
    <div>
      <h4>{Proptodoitem.title}</h4>
      <p>{Proptodoitem.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{DeleteTodoItem(Proptodoitem)}}>Delete</button><hr/>
    </div>
  )
}


export default TodoItems; 