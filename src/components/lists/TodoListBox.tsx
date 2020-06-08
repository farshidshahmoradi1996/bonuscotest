import React from "react";
import { TodoList } from "types/todos";
import { TodoCard } from "components";
import TodoListHeader from "./TodoListHeader";
interface Props {
  data?: TodoList;
}

const TodoListBox: React.FC<Props> = ({ data }) => {
  return (
    <div className="board--list">
      <TodoListHeader info={data} />
      <div className="board--list-body">
        {data?.todos?.map((todo) => (
          <TodoCard info={todo} key={todo?.id?.toString()} />
        ))}
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
};
export default TodoListBox;
