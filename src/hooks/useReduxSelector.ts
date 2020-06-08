import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "store/rootReducer";

const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useReduxSelector;
