import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

//local
import TodoInfoModal from "components/lists/TodoInfoModal";
import { TodosEditFormValue, TodosActionType, TodoList } from "types/todos";
import { useTodosList } from "hooks";

const NewList = () => {
  //hooks
  const dispatch = useDispatch();
  const { todos_list } = useTodosList();
  const [isNewListModalVisible, setIsNewListModalVisible] = useState(false);

  //voids
  const closeModal = () => {
    setIsNewListModalVisible(false);
  };
  const saveNewList = ({ description, name }: TodosEditFormValue) => {
    const type = TodosActionType.ADD_TODO_LIST;

    const latestTodosListId = !todos_list.length
      ? 1
      : todos_list[todos_list.length - 1].id;
    const payload: TodoList = {
      id: latestTodosListId + 1,
      todos: [],
      created_date: new Date().getTime(),
      last_update_date: new Date().getTime(),
      description,
      name,
    };
    dispatch({ type, payload });
    closeModal();
  };
  return (
    <>
      <div
        className="board--list-new"
        onClick={() => setIsNewListModalVisible(true)}
      >
        <PlusCircleOutlined style={{ color: "white" }} />
        <h3 style={{ color: "white" }}>Add New Card</h3>
      </div>
      <TodoInfoModal
        isVisible={isNewListModalVisible}
        onCancel={closeModal}
        onOk={(info) => saveNewList(info)}
        newList
      />
    </>
  );
};

export default NewList;
