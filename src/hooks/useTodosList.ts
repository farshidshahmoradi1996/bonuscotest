import useReduxSelector from "./useReduxSelector";
import { TodosState } from "types/todos";
function useTodos(): TodosState {
  const todos = useReduxSelector((state) => state.todos);
  const { has_error, loading, todos_list } = todos;
  return { has_error, loading, todos_list };
}
export default useTodos;
