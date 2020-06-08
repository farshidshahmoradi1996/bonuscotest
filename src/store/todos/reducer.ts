import { TodosState, TodosAction, TodosActionType } from "types/todos";

const initialState: TodosState = {
  todos_list: [],
  has_error: false,
  loading: false,
};

export default function (
  state = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case TodosActionType.API_TODO_REQUESTED:
      return { ...state, has_error: false, loading: true };
    case TodosActionType.API_TODO_SUCCESS:
      return { ...state, has_error: false, loading: false };
    case TodosActionType.API_TODO_FAILED:
      return { ...state, has_error: true, loading: false };
    case TodosActionType.ADD_TODO_LIST:
      return {
        ...state,
        todos_list: [...state.todos_list, action.payload],
      };

    default:
      return state;
  }
}
