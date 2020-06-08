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
    case TodosActionType.UPDATE_TODO_LIST_INFO: {
      const { todos_list } = state;
      const { last_update_date, description, name, id } = action?.payload;
      const index = todos_list.findIndex((item) => item.id === id);
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
    }
    case TodosActionType.TOGGLE_COMPLETED_STATUS: {
      //find
      const { list_id, item_id } = action?.payload;
      const { todos_list } = state;
      const list_index = todos_list.findIndex((item) => item.id === list_id);
      const { todos } = todos_list[list_index];
      const todo_index = todos?.findIndex((item) => item.id === item_id);
      todos_list[list_index].todos[todo_index].completed = !todos_list[
        list_index
      ].todos[todo_index]?.completed;

      return {
        ...state,
        todos_list,
      };
    }

    default:
      return state;
  }
}
