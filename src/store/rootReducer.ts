import { combineReducers } from "redux";
import todos from "./todos/reducer";
import { TodosState } from "types/todos";

//RootState Types
export interface RootState {
  todos: TodosState;
}

export default combineReducers({ todos });
