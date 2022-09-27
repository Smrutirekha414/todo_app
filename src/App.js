//import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(null);
  // const [isEdit, setIsEdit] = useState(false);
  // const [editText, setEditText] = useState('');

  // API integration
  useEffect(() => {
    async function getTodo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      const newData = await data.slice(0, 10);
      console.log(newData);
      setTodos(newData);
    }

    getTodo();
  }, []);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  //add item
  const addTodo = () => {
    const todoItem = {
      userId: 1,
      id: todos.length + 1,
      title: todo,
      complete: false,
    };
    const preData = [...todos];
    const newData = [...preData, todoItem];

    setTodos(newData);
    setTodo("");
  };

  //delete item
  // const deleteTodo = (id) => {
  //   const preData = [...todos];
  //   const updatedData = preData.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   setTodos(updatedData);
  // };

  // const editTodo = (id,title) => {
  //       setIsEdit(true)
  //       setEditText(title)
  // }

  // const handleTodoEdit = (e) =>{
  //     setEditText(e.target.value)
  // }

  //console.log( 'todos',todos);

  return (
    <div className="App">
      <input type="text" onChange={handleTodo} value={todo} />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        );
        // return isEdit? (
        //   <div>
        //     <input type="text" value={editText} onChange={(e) => handleTodoEdit(e)} />
        //   </div>
        // ) : (
        //   <div className="todo-item-container">
        //     <div key={todo.id}>{todo.title}</div>
        //     <button onClick={() => editTodo(todo.id, todo.title)}> Edit </button>
        //     <button onClick={() => deleteTodo(todo.id)}> Delete </button>

        //   </div>
        // );
      })}
    </div>
  );
}

export default App;
