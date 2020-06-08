import { takeEvery } from "redux-saga/effects";
import { watchFetchAllTodos } from "./todos/effects";
import { TodosActionType } from "types/todos";
export default function* rootSaga() {
  yield takeEvery(TodosActionType.API_TODO_REQUESTED, watchFetchAllTodos);
}
