import Header from './Header';
import './App.css';
import Footer from './Footer';
import Todos from './Todos';
import AddTodo from './AddTodo';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todosArray") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todosArray"));
  }

  const onDelete = (Proptodoitem) => {
    console.log("Deleted Todo", Proptodoitem);
    setTodos(todosArray.filter((element) => element !== Proptodoitem))
    localStorage.setItem("todosArray", JSON.stringify(todosArray));
  }

  const onAdd = (title, desc) => {
    console.log("Adding Todo", title, desc)
    let sno;
    if (todosArray.length === 0) {
      sno = 0;
    }
    else {
      sno = todosArray[todosArray.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todosArray, newTodo]);
    console.log(newTodo);

  }

  const [todosArray, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todosArray", JSON.stringify(todosArray));
  }, [todosArray])

  return (
    <div>
      <Header searchBar={true} title="My Todo List" />
      <AddTodo AddTodos={onAdd} />
      <Todos Proptodos={todosArray} DeleteTodo={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
