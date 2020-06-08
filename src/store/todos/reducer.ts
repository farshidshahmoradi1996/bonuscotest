import { TodosState, TodosAction, TodosActionType } from "types/todos";

const initialState: TodosState = {
  todos_list: [],
  has_error: false,
  loading: false,
  first_load_success: false,
};

export default function (
  state = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case TodosActionType.API_TODO_REQUESTED:
      return {
        ...state,
        has_error: false,
        loading: true,
        first_load_success: false,
      };
    case TodosActionType.API_TODO_SUCCESS:
      return {
        ...state,
        has_error: false,
        loading: false,
        first_load_success: true,
      };
    case TodosActionType.API_TODO_FAILED:
      return {
        ...state,
        has_error: true,
        loading: false,
        first_load_success: false,
      };
    case TodosActionType.ADD_TODO_LIST:
      return {
        ...state,
        todos_list: [...state.todos_list, action.payload],
      };
    case TodosActionType.UPDATE_TODO_LIST_INFO: {
      const { todos_list } = state;
      const { last_update_date, description, name, id } = action?.payload;
      //find index by id
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
      //find index by id
      const list_index = todos_list.findIndex((item) => item.id === list_id);
      const { todos } = todos_list[list_index];
      //find todo index by id
      const todo_index = todos?.findIndex((item) => item.id === item_id);
      //toggle compeleting todo
      const toggle = !todos_list[list_index].todos[todo_index]?.completed;
      todos_list[list_index].todos[todo_index].completed = toggle;
      //update date time
      todos_list[list_index].last_update_date = new Date().getTime();
      return {
        ...state,
        todos_list,
      };
    }
    case TodosActionType.ADD_NEW_TODO_ITEM: {
      const { completed, title, id, list_id } = action.payload;
      const { todos_list } = state;
      //find index by id
      const list_index = todos_list.findIndex((item) => item.id === list_id);
      const { todos } = todos_list[list_index];
      //add new todo
      const newTodos = [...todos, { completed, title, id }];
      //mutate todos
      todos_list[list_index].todos = newTodos;
      //update date time
      todos_list[list_index].last_update_date = new Date().getTime();
      return {
        ...state,
        todos_list,
      };
    }

    case TodosActionType.DELETE_LIST: {
      const { todos_list } = state;
      const { id } = action.payload;
      //filter by id for deleteing
      const newTodosList = todos_list.filter((item) => item.id !== id);
      return {
        ...state,
        todos_list: newTodosList,
      };
    }
    case TodosActionType.DELETE_TODOS_FROM_LIST: {
      const { todos_list } = state;
      const {
        list_id,
        todos_id,
      }: { list_id: number; todos_id: number[] } = action.payload;

      //find index by id
      const index = todos_list.findIndex((item) => item.id === list_id);

      //filter by exist id list
      todos_list[index].todos = todos_list[index].todos.filter(
        (_) => !todos_id.includes(_.id)
      );
      //update time
      todos_list[index].last_update_date = new Date().getTime();
      return {
        ...state,
        todos_list,
      };
    }

    default:
      return state;
  }
}
