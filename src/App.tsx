import React from "react";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

//local
import { Home } from "pages";

//create main store config
const store = configureStore();

function App() {
  //no react-router-needed
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
