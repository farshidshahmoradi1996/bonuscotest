import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Button } from "antd";

//local
import { TodoList, TodosEditFormValue, TodosActionType } from "types/todos";
import TodoInfoModal from "./TodoInfoModal";

interface Props {
  info?: TodoList;
}

const TodoListHeader: React.FC<Props> = ({ info }) => {
  const dispatch = useDispatch();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  //voids
  const closeModal = () => {
    setIsEditModalVisible(false);
  };

  const updateTodo = ({ description, name }: TodosEditFormValue) => {
    const type = TodosActionType.UPDATE_TODO_LIST_INFO;
    const payload = {
      id: info?.id,
      last_update_date: new Date().getTime(),
      description,
      name,
    };
    dispatch({ type, payload });
    closeModal();
  };

  const deleteTodoList = () => {
    const type = TodosActionType.DELETE_LIST;
    const payload = {
      id: info?.id,
    };
    dispatch({ type, payload });
    closeModal();
  };

  return (
    <>
      <div className="board--list-header">
        <h2>{info?.name}</h2>
        <Button
          type="dashed"
          icon={<MoreOutlined />}
          shape="circle-outline"
          onClick={() => setIsEditModalVisible(true)}
        />
      </div>
      <TodoInfoModal
        isVisible={isEditModalVisible}
        info={info}
        onCancel={closeModal}
        onOk={(info) => updateTodo(info)}
        newList={false}
        onDelete={deleteTodoList}
      />
    </>
  );
};
export default TodoListHeader;
