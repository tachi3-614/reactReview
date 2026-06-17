const TodoItem = (props) => {
    return (
        <li className="todo-item">
            <span className="todo-text">{props.task}</span>
            <button className="btn-delete">削除</button>
        </li>
    );
};

export default TodoItem;