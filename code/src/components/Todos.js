import React, {useState} from "react";
// import uuidv4 from "uuid/";

import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const [todoText, setTodoText] = useState("");
    const [todos,setTodos] = useState([
        {
            id : 50,
            text : "drinking water",
            isCompleted: false,
        },
        {
            id : 51,
            text : "eating ",
            isCompleted: false,
        },
        {
            id : 53,
            text : "coding",
            isCompleted: true,
        }

    ]);

    const changeTodoText = (e) => {
        // set todo text id: uuidv4(), 
        setTodoText(e.target.value);
    
    };

    const AddTodo = () => {

        const newTodo = {
            id : uuidv4(),
            text: todoText,
            isCompleted: false
        };
        setTodos([newTodo, ...todos]);
        setTodoText("");
    }

    const completTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = true;
                return todo;
            }
            return todo;
        });
        // console.log(updatedTodos)
        setTodos(updatedTodos)
    };
   const deleteTodo = id => {
       const updatedTodos = todos.filter(todo => todo.id !== id)
       setTodos(updatedTodos)
       console.log(updatedTodos);
 
    }
    return (        
        <div className="card shadow">
            <div className="card-header">
            <div className="input-group mb-3">
            <input type="text"
             className="form-control" 
            placeholder="Enter To Do" 
            value={todoText}
            onChange={(e) => changeTodoText(e)}
        
            />
            <div className="input-group-append">
               <button className="btn btn-primary" onClick={AddTodo}>Add To Do</button>
            </div>
            </div>
            <ul className="list-group list-group-flush">
                {
                    todos.map(todo => {
                        return (
                            
                            <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                                <div>
                                <input type="checkbox" checked={todo.isCompleted} onChange={() => completTodo(todo.id)}/>
                                <span className={todo.isCompleted ? `completed`: null}>
                                {todo.text}
                                </span>
                                
                                </div>
                            <i className="far fa-trash-alt" onClick={() => deleteTodo(todo.id)}></i>
                                                                    
                            </li>
                                                       
                        )
                    })
                }
            </ul>
            </div>
        </div>
    )
}

export default  Todos;