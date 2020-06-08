import React, { useEffect, useCallback } from "react";
import { Header, Board } from "container";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { TodosActionType } from "types/todos";
import { useTodosList } from "hooks";

function Home() {
  const dispatch = useDispatch();
  const { has_error, loading, todos_list } = useTodosList();
  const checkDefaultTodoList = useCallback(() => {
    //check if todo list is empty fetch data from server
    if (!todos_list.length)
      dispatch({ type: TodosActionType.API_TODO_REQUESTED });
  }, [dispatch, todos_list.length]);
  useEffect(() => {
    checkDefaultTodoList();
  }, [checkDefaultTodoList]);

  if (loading) return null;
  if (has_error) return null;
  return (
    <>
      <Header />
      <Board data={todos_list} />
    </>
  );
}
export default Home;
