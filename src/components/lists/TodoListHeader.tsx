import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { TodoList, TodosEditFormValue } from "types/todos";
import EditListModal from "./EditListModal";
interface Props {
  info?: TodoList;
}

const TodoListHeader: React.FC<Props> = ({ info }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const closeModal = () => {
    setIsEditModalVisible(false);
  };
  const updateTodo = (info: TodosEditFormValue) => {
    console.log(info);
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
      <EditListModal
        isVisible={isEditModalVisible}
        info={info}
        onCancel={closeModal}
        onOk={(info) => updateTodo(info)}
      />
    </>
  );
};
export default TodoListHeader;
