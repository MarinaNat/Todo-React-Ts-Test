import { ITodo } from "../types/data";
import Sort from "./Sort/Sort";
import { TodoItem } from "./TodoItem/TodoItem";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  handleTodoFilter: (complete: boolean | string, id: number) => void;
  handleClearCompleted: (complete: boolean | string) => void;
  remainingTodos: number;
  isActive: number;
  setIsActive: any;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const {
    items,
    toggleTodo,
    removeTodo,
    handleTodoFilter,
    handleClearCompleted,
    remainingTodos,
    isActive,
    setIsActive,
  } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
      <Sort
        items={items}
        handleTodoFilter={handleTodoFilter}
        handleClearCompleted={handleClearCompleted}
        remainingTodos={remainingTodos}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export { TodoList };
