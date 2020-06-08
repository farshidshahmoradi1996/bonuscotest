import React from "react";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";

//local

import { useTodosList } from "hooks";
import { TodoList, TodosActionType } from "types/todos";

interface Props {
  selectedItemsId: Array<number>;
  cardInfo: TodoList;
  onActionCompelete(): void;
}

const ActionButton: React.FC<Props> = ({
  selectedItemsId,
  cardInfo,
  onActionCompelete,
}) => {
  //hooks
  const dispatch = useDispatch();
  const { todos_list } = useTodosList();
  //voids
  const moveItems = (List: TodoList) => {
    //fist add cards then delete from active card
    const todosToMove = cardInfo.todos.filter((_) =>
      selectedItemsId.includes(_.id)
    );
    todosToMove.forEach((item) => {
      const type = TodosActionType.ADD_NEW_TODO_ITEM;
      const payload = { list_id: List.id, ...item };
      dispatch({ type, payload });
    });
    deleteItems(false);
    onActionCompelete();
    message.success(
      `${selectedItemsId.length} Item(s) Moved From ${cardInfo.name} To ${List.name} `
    );
  };
  const deleteItems = (showMessage = true) => {
    const type = TodosActionType.DELETE_TODOS_FROM_LIST;
    const payload = { list_id: cardInfo.id, todos_id: selectedItemsId };
    dispatch({ type, payload });
    if (!showMessage) return;
    message.success(
      `${selectedItemsId.length} Item(s) Removed From ${cardInfo.name}`
    );
    onActionCompelete();
  };
  //create menu by movable Cards
  const movableCards = todos_list.filter((_) => _.id !== cardInfo.id);
  const menu = (
    <Menu onClick={() => {}}>
      {movableCards.map((item) => (
        <Menu.Item
          key={item.id}
          onClick={() => moveItems(item)}
        >{`Move ${selectedItemsId.length} item(s) to ${item.name}`}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="flex-center" style={{ minHeight: 100 }}>
      <Button type={"link"} danger onClick={() => deleteItems(true)}>
        Delete
      </Button>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button type={"link"}>Move</Button>
      </Dropdown>
    </div>
  );
};
export default ActionButton;
