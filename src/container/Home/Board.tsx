import React from "react";
import { TodoList } from "types/todos";
import { TodoListBox, NewList } from "components";
interface Props {
  data: Array<TodoList>;
}

const Board: React.FC<Props> = ({ data }) => {
  if (!Array.isArray(data)) return null;

  return (
    <div className="board">
      {data.map((item) => (
        <TodoListBox data={item} key={item.id.toString()} />
      ))}
      <NewList />
    </div>
  );
};

export default Board;
