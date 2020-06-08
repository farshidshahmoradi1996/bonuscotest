import React from "react";
import { Todo } from "types/todos";

interface Props {
  info: Todo;
}

const TodoCard: React.FC<Props> = ({ info }) => {
  return (
    <div className="board--list-card ">
      <p>{info.title}</p>
    </div>
  );
};
export default TodoCard;
