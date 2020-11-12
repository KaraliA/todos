import './Counter.css';

const Counter = ({list}) => {
    const toDo = () => {
        return list.filter(item => !item.done).length;
    };
    const done = () => {
        return list.filter(item => item.done).length;
    };
    const pluralize = (length) => {
        return length === 1 ? "item" : "items";
    }
    
    return (
        <div className="counter">
            <p>To do: { toDo() } { pluralize(toDo()) }</p>
            <p>Done: { done() } { pluralize(done()) }</p>
        </div>
    )
}

export default Counter;