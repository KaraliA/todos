import "./ToDoItem.css";

const ToDoItem = ({item, handleChange, remove}) => {

    return (
        <div className="todo-item">
            <input
                className="toggle-done"
                type="checkbox"
                checked={item.done}
                onChange={(e) => handleChange(e, item.id)}
            />
            <p>{item.text}</p>
            <button className="remove-btn" onClick={() => remove(item)}></button>
        </div>
    );
}

export default ToDoItem;
