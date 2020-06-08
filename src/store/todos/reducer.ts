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
    case TodosActionType.UPDATE_TODO_LIST_INFO:
      //find
      const { todos_list } = state;
      const { last_update_date, description, name } = action?.payload;
      const index = todos_list.findIndex(
        (item) => item.id === action?.payload?.id
      );
      todos_list[index] = {
        ...todos_list[index],
        last_update_date,
        description,
        name,
      };
      return {
        ...state,
        todos_list,
      };

    default:
      return state;
  }
}
