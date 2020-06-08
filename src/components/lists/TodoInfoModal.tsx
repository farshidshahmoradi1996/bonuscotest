import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { TodoList, TodosEditFormValue } from "types/todos";

//local
interface Props {
  info?: TodoList;
  isVisible: boolean;
  onCancel(): void;
  onOk(info: TodosEditFormValue): void;
  newList: boolean;
  onDelete?(): void;
}

const TodoInfoModal: React.FC<Props> = ({
  info,
  isVisible,
  onCancel,
  onOk,
  newList = false,
  onDelete = null,
}) => {
  const onFinish = (values: TodosEditFormValue) => {
    onOk(values);
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={onCancel}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      title={newList ? "Create New List" : `edit ${info?.name}`}
      destroyOnClose
    >
      <Form
        name="basic"
        initialValues={
          {
            name: info?.name,
            description: info?.description,
          } as TodosEditFormValue
        }
        onFinish={({ name, description }) => onFinish({ description, name })}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input Description!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          {typeof onDelete === "function" && (
            <Button
              type="ghost"
              danger
              style={{ marginLeft: 10 }}
              onClick={onDelete}
            >
              Delete
            </Button>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default TodoInfoModal;
