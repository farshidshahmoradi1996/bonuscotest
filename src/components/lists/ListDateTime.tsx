import React from "react";
import { getFromNowByUnixTime } from "utils";
import { TodoList } from "types/todos";

interface Props {
  info: TodoList;
}
const ListDateTime: React.FC<Props> = ({ info }) => {
  return (
    <>
      <p style={{ paddingTop: 8 }}>
        {`last update : ${getFromNowByUnixTime(info.last_update_date)}`}
      </p>
      <p style={{ paddingBottom: 8 }}>{`create at : ${getFromNowByUnixTime(
        info.created_date
      )}`}</p>
    </>
  );
};

export default ListDateTime;
