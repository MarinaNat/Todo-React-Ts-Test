import { useState, useRef, useEffect } from "react";
import { ITodo } from "../../types/data";
import { TodoList } from "../TodoList";
import "./App.css";
import { FaChevronDown } from "react-icons/fa";

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(1);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filtered, setFiltered] = useState(todos);
  const remainingTodos = todos.filter((todos) => !todos.complete).length;

  const inputRef = useRef<HTMLInputElement>(null);

  // передача значений из поля ввода
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  // реакция при нажатии на клавишу клавиатуры
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // добавление данных в todos
  const addTodo = () => {
    //проверка inputa перед отправкой
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  // удаление отдельной задачи
  const removeTodo = (id: number): void => {
    let newTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodo);
    setIsActive(1);
  };

  // удаление выпольненных задач
  const handleClearCompleted = (complete: string | boolean): void => {
    setTodos(todos.filter((todo) => todo.complete === complete));
  };

  // выполненная/невыполненная
  const toggleTodo = (id: number): void => {
    setIsActive(1);
    let newTodo = [...todos].filter((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  // для фокуса курсора в инпуте
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // фильтрация
  function handleTodoFilter(complete: string | boolean, _id: number) {
    if (complete === "all") {
      setFiltered(todos);
    } else {
      setFiltered([...todos].filter((item) => item.complete === complete));
    }
    setIsActive(_id);
  }

  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <div className="app__list">
        <div className="app__input">
          <FaChevronDown className="app__input-icon" />
          <input
            type="text"
            className="app__input-field"
            value={value}
            placeholder="What needs to be done?"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </div>

        <TodoList
          items={filtered}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          handleTodoFilter={handleTodoFilter}
          handleClearCompleted={handleClearCompleted}
          remainingTodos={remainingTodos}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </div>
  );
};

export default App;
