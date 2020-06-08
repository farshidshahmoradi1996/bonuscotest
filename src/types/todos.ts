//action types

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoList {
  id: number;
  todos: Array<Todo>;
  name: string;
  description: string;
  created_date: number;
  last_update_date: number;
}

export interface TodosState {
  readonly todos_list: Array<TodoList>;
  readonly loading: boolean;
  readonly has_error: boolean;
  readonly first_load_success: boolean;
}
export interface TodosAction {
  type: TodosActionType;
  payload?: any;
}
//action types
export enum TodosActionType {
  API_TODO_REQUESTED = "API_TODO_REQUESTED",
  API_TODO_FAILED = "API_TODO_FAILED",
  API_TODO_SUCCESS = "API_TODO_SUCCESS",
  ADD_TODO_LIST = "ADD_TODO_LIST",
  UPDATE_TODO_LIST_INFO = "UPDATE_TODO_LIST_INFO",
  TOGGLE_COMPLETED_STATUS = "TOGGLE_COMPLETED_STATUS",
  ADD_NEW_TODO_ITEM = "ADD_NEW_TODO_ITEM",
  DELETE_LIST = "DELETE_LIST",
  DELETE_TODOS_FROM_LIST = "DELETE_TODOS_FROM_LIST",
}

export interface TodosEditFormValue {
  name: string;
  description: string;
}
