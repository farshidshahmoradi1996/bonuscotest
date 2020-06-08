import useReduxSelector from "./useReduxSelector";
import { TodosState } from "types/todos";
function useTodos(): TodosState {
  const todos = useReduxSelector((state) => state.todos);
  const { has_error, loading, todos_list, first_load_success } = todos;
  return { has_error, loading, todos_list, first_load_success };
}
export default useTodos;
