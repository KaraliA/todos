import { useState } from "react";
import logo from '../assets/logo192.png';
import ToDoItem from './ToDoItem';
import Counter from './Counter';
import './ToDo.css';

const ToDo = () => {
    const [list, setList] = useState([]);
    const [toDo, setToDo] = useState("");

    const isListEmpty = list.length === 0;
    const areThereDoneItems = list.find(item => item.done);

    const createNewToDoItem = () => {
        if (!toDo || !toDo.trim()) {
            return;
        }

        const newToDo = { 
            id: Math.floor(Math.random()*Date.now()),
            text: toDo,
            done: false
        };
        setList([...list, newToDo]);
        setToDo("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            createNewToDoItem();
        }
    };

    const handleInput = (event) => {
        setToDo(event.target.value);
    };

    const handleCheckbox = (event, todoId) => {
        setList(
            list.map(item =>
                item.id === todoId 
                ? {...item, done: event.target.checked} 
                : item
            )
        );
    };

    const removeDoneItems = () => {
        setList(list.filter(item => !item.done));
    };

    const clearToDoList = () => {
        setList([]);
    };

    const removeToDo = (todo) => {
        setList(list.filter(item => item.id !== todo.id));
    }

    return (
        <div className="todo-container">
            <img src={logo} className="logo" alt="logo" />
            <h1>To Do List</h1>
            <div className="todo-input">
                <input type="text" placeholder="I need to..." value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
                <button className="todo-add" onClick={createNewToDoItem}>+</button>
            </div>
            {!isListEmpty &&
                <div className="todo-list">
                    <Counter list={list}/>
                    <button className="action-btn" disabled={!areThereDoneItems} onClick={removeDoneItems}>Remove done</button>
                    <button className="action-btn" onClick={clearToDoList}>Clear all</button>
                    <div style={{"width": "100%"}}>
                        {list.map(item => {
                            return <ToDoItem item={item} key={item.id} handleChange={handleCheckbox} remove={removeToDo} />
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default ToDo;
