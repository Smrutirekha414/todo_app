import React, { useState } from 'react'

function TodoItem(props) {
    const {todo,todos,setTodos} = props; 
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState('');

    const deleteTodo = (id) => {
        const preData = [...todos];
        const updatedData = preData.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(updatedData);
      };
    
      const editTodo = (id,title) => {
            setIsEdit(true)
            setEditText(title)
      } 

    const handleTodoEdit = (e) =>{
        setEditText(e.target.value)
    }

    const updateTodo = (id) => {
        const preData = [...todos];
        const dataToEdit = preData.filter((todo) => {
            return todo.id === id;
          });
            const indexToEdit = dataToEdit[0].id;
             preData[indexToEdit-1].title = editText;
             setTodos(preData);
             setIsEdit(false);
    }

       return isEdit? (
          <div>
            <input type="text" value={editText} onChange={(e) => handleTodoEdit(e)} />
            <button onClick={() => updateTodo(todo.id)}> Update </button>
          </div>
        ) : (
          <div className="todo-item-container">
            <div key={todo.id}>{todo.title}</div>
            <button onClick={() => editTodo(todo.id, todo.title)}> Edit </button>
            <button onClick={() => deleteTodo(todo.id)}> Delete </button>
            
          </div>
        );
}

export default TodoItem
