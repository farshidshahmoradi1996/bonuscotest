import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

//local
import { TodosActionType } from "types/todos";
import { useTodosList } from "hooks";

interface Props {
  list_id: number;
}

const NewCard: React.FC<Props> = ({ list_id }) => {
  //hooks
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { todos_list } = useTodosList();

  //voids
  const addNewItem = () => {
    if (!title) {
      message.error("Item name cannot be empty");
      return;
    }
    const type = TodosActionType.ADD_NEW_TODO_ITEM;
    const todosInList = todos_list.find((_) => _.id === list_id)?.todos;
    const lastTodoInListId = !todosInList?.length
      ? 1
      : todosInList[todosInList.length - 1].id;
    const payload = {
      completed: false,
      title,
      id: lastTodoInListId + 1,
      list_id,
    };
    dispatch({ type, payload });
    setTitle("");
    message.success("new Item Added");
  };

  return (
    <div className="board--list-card ">
      <Input
        placeholder="add new Item"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Button
        shape="circle"
        icon={<PlusOutlined />}
        onClick={addNewItem}
        style={{ margin: "0 3px" }}
      />
    </div>
  );
};

export default NewCard;
