import React from "react";
import { Todo } from "types/todos";
interface Props {
  data: Array<Todo>;
}

const TodoList: React.FC<Props> = ({ data }) => {
  return <div className="board--list"></div>;
};
export default TodoList;
