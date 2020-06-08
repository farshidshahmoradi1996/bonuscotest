import React, { useState } from "react";
import { TodoList, Todo } from "types/todos";
import { TodoCard, NewCard } from "components";
import TodoListHeader from "./TodoListHeader";
import { getFromNowByUnixTime } from "utils";

import ActionButton from "./ActionButton";
import ListDateTime from "./ListDateTime";
interface Props {
  data: TodoList;
}

const TodoListBox: React.FC<Props> = ({ data }) => {
  const [checkedItemsId, setCheckedItemsIs] = useState<number[]>([]);

  const handleCheckedItemsId = (checked: boolean, info: Todo) => {
    setCheckedItemsIs((prv) =>
      checked ? [...prv, info.id] : prv.filter((_) => _ !== info.id)
    );
  };

  const onActionCompelete = () => {
    setCheckedItemsIs([]);
  };
  return (
    <div className="board--list">
      <TodoListHeader info={data} />
      <div className="board--list-body">
        {data?.todos?.map((todo) => (
          <TodoCard
            info={todo}
            key={todo?.id?.toString()}
            list_id={data.id}
            onCheckChange={(checked) => handleCheckedItemsId(checked, todo)}
          />
        ))}
        {!data?.todos?.length && (
          <div className="board--list-empty">
            <p>Empty List !</p>
          </div>
        )}
      </div>
      {checkedItemsId.length ? (
        <ActionButton
          selectedItemsId={checkedItemsId}
          cardInfo={data}
          onActionCompelete={onActionCompelete}
        />
      ) : (
        <div className="board--list-footer">
          <NewCard list_id={data.id} />
          <ListDateTime info={data} />
        </div>
      )}
    </div>
  );
};
export default TodoListBox;
