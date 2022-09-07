import React from "react";

// Libs
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Store
import { store, persistor } from "~/store";

// Dulkee App
import App from "./App";

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;
