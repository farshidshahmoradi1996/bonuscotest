import { put, delay, race } from "redux-saga/effects";
import { fetch } from "utils";
import { TodosActionType, TodoList } from "types/todos";

const DEFAULT_TIMEOUT = 5000;
export function* watchFetchAllTodos() {
  try {
    const { response } = yield race({
      response: fetch("/todos", { method: "GET" }),
      timeout: delay(DEFAULT_TIMEOUT),
    });
    if (!Array.isArray(response)) throw Error("bad response");
    //request success
    yield put({ type: TodosActionType.API_TODO_SUCCESS });
    //save new todo list
    //server return too much todos :| slice array :)
    const todos = response.slice(0, 50);
    const nowDateTime = new Date();
    const todosList: TodoList = {
      id: 1,
      todos,
      name: "Todo",
      description: "must compelete soon",
      created_date: nowDateTime.getTime(),
      last_update_date: nowDateTime.getTime(),
    };

    yield put({ type: TodosActionType.ADD_TODO_LIST, payload: todosList });
  } catch {
    yield put({ type: TodosActionType.API_TODO_FAILED });
  }
}
