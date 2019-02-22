import React, { Component } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import reducer from "./reducers";
import { muiTheme } from "./theme";
import TaskList from "./TaskList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={muiTheme}>
              <TaskList />
            </ThemeProvider>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
