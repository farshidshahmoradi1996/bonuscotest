import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

//import rootReducer and rootSaga
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
//persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"], //persist todos
};
//export store
const configureStore = () => {
  //redux-middlewares
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  //check dev mode
  if (process.env.NODE_ENV === "development")
    middlewares.push(createLogger() as any);

  //config persist reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  //create store
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  //create persisted store
  const persistor = persistStore(store, null);

  return {
    runSaga: sagaMiddleware.run(rootSaga),
    persistor,
    ...store,
  };
};
export default configureStore;
