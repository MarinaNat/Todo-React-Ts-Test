import { ITodo } from "../../types/data";
import "./Todoitem.css";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;
  return (
    <div className="todoitem">
      <label className="todoitem__label">
        <input
          className="todoitem__checkbox"
          type="checkbox"
          checked={complete}
          onChange={() => toggleTodo(id)}
        />
        <span className="todoitem__check">
          {complete && <AiOutlineCheck className="todoitem__check-on" />}
        </span>
        {complete ? (
          <span className="todoitem__text todoitem__text-cross-out">
            {title}
          </span>
        ) : (
          <span className="todoitem__text">{title}</span>
        )}
      </label>

      <button onClick={() => removeTodo(id)} className="todoitem__btn">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export { TodoItem };
