import React from "react";
import { ITodo } from "../../types/data";
import "./Sort.css";

interface ITodoSortProps {
  handleTodoFilter: (complete: boolean | string, id: number) => void;
  handleClearCompleted: (complete: boolean | string) => void;
  items: ITodo[];
  remainingTodos: number;
  isActive: number;
  setIsActive: any;
}

const Sort: React.FC<ITodoSortProps> = (props) => {
  const {
    handleTodoFilter,
    handleClearCompleted,
    remainingTodos,
    isActive,
    setIsActive,
  } = props;

  const tabs = [
    {
      _id: 1,
      name: "All",
      filter: "all",
    },
    {
      _id: 2,
      name: "Active",
      filter: false,
    },
    {
      _id: 3,
      name: "Completed",
      filter: true,
    },
  ];

  return (
    <nav className="sort">
      <p className="sort__text">{`${remainingTodos}  items left`}</p>
      <span className="sort__btn-grup">
        {tabs.map((tab) => (
          <button
            key={tab._id}
            onClick={() => {
              handleTodoFilter(tab.filter, tab._id);
              setIsActive(tab._id);
            }}
            className={`${
              isActive === tab._id ? "sort__btn-sorting sort__btn" : "sort__btn"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </span>
      <button className="sort__btn" onClick={() => handleClearCompleted(false)}>
        Clear completed
      </button>
    </nav>
  );
};

export default Sort;
