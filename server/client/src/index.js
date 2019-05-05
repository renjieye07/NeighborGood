// import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import "semantic-ui-css/semantic.min.css";
// import "./index.css";
// import App from "./app/layout/App";
// import registerServiceWorker from "./registerServiceWorker";
//import { configureStore } from "./app/store/configureStore";
import ScrollToTop from '../src/app/common/util/ScrollToTop';
// // import reduxThunk from "redux-thunk";
// // import { createStore, applyMiddleware } from "redux";

// const store = configureStore();

// const rootEl = document.getElementById("root");

// let render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <ScrollToTop>
//           <App />
//         </ScrollToTop>
//       </BrowserRouter>
//     </Provider>,
//     rootEl
//   );
// };

// if (module.hot) {
//   module.hot.accept("./app/layout/App", () => {
//     setTimeout(render);
//   });
// }

// render();

// registerServiceWorker();

//redux;

import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './app/layout/App';
import reducers from './app/reducers';

//reducer
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);
//const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
