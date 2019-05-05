import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

export const configureStore = preloadedState => {
  // const middlewares = [];
  // const middlewareEnhancer = applyMiddleware(...middlewares);

  // const storeEnhancers = [middlewareEnhancer];

  // const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/index", () => {
        const newRootReducer = require("../reducers/index").default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
