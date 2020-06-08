import React, { useEffect, useCallback } from "react";

import { Header, Board, LoadingState, ErrorState } from "container";
import { useDispatch } from "react-redux";

//local
import { TodosActionType } from "types/todos";
import { useTodosList } from "hooks";

function Home() {
  //dispatcher
  const dispatch = useDispatch();
  const { has_error, loading, todos_list, first_load_success } = useTodosList();

  const checkDefaultTodoList = useCallback(() => {
    //check if todo list is empty fetch data from server
    if (!first_load_success)
      dispatch({ type: TodosActionType.API_TODO_REQUESTED });
  }, [dispatch, first_load_success]);

  useEffect(() => {
    checkDefaultTodoList();
  }, [checkDefaultTodoList]);

  if (loading) return <LoadingState />;
  if (has_error) return <ErrorState onRetry={checkDefaultTodoList} />;
  return (
    <>
      <Header />
      <Board data={todos_list} />
    </>
  );
}
export default Home;
