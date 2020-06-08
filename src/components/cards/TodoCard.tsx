import React from "react";
import { Todo, TodosActionType } from "types/todos";
import { Checkbox, Button } from "antd";
import { useDispatch } from "react-redux";
interface Props {
  info: Todo;
  list_id: number;
  onCheckChange(checked: boolean): void;
}

const TodoCard: React.FC<Props> = ({ info, list_id, onCheckChange }) => {
  const dispatch = useDispatch();
  const toggleCompeleted = () => {
    const type = TodosActionType.TOGGLE_COMPLETED_STATUS;
    const payload = { list_id, item_id: info.id };
    dispatch({ type, payload });
  };
  return (
    <div className="board--list-card ">
      <div style={{ flex: 2 }} className="flex-center">
        <Checkbox onChange={(e) => onCheckChange(e.target.checked)}></Checkbox>
      </div>
      <div style={{ flex: 6, alignItems: "center" }}>
        <p
          style={{
            textDecoration: info.completed ? "line-through" : "initial",
          }}
        >
          {info.title}
        </p>
      </div>
      <div style={{ flex: 2 }}>
        <Button type="link" onClick={toggleCompeleted}>
          {info?.completed ? "UNDO" : "DONE"}
        </Button>
      </div>
    </div>
  );
};
export default TodoCard;
