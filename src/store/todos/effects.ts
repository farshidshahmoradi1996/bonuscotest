import { put, delay, race } from "redux-saga/effects";
import { fetch } from "utils";
import { TodosActionType, TodoList } from "types/todos";
import { message } from "antd";

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

    //initial First Todo List
    //save new todo list
    //server return too much todos :| slice array :)
    const todos = response.slice(0, 10);

    const nowDateTime = new Date().getTime();

    const todosList: TodoList = {
      id: 1,
      todos,
      name: "Todo",
      description: "must compelete soon",
      created_date: nowDateTime,
      last_update_date: nowDateTime,
    };

    yield put({ type: TodosActionType.ADD_TODO_LIST, payload: todosList });
    message.success("Welcome,Demo Todo is Ready");
  } catch {
    yield put({ type: TodosActionType.API_TODO_FAILED });
    message.error("Oh Sorry");
  }
}
