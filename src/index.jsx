import React from 'react';
import ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createHashHistory} from "history";
import makeStore from "./store";
import { openRoutes } from "./routes";
import { bootstrap, setBoardState } from './action_creators'
import * as deqConfig from "./config";

const store = makeStore();

store.dispatch(bootstrap());

export const history = createHashHistory();

history.listen((location) => {
    // todo
});

store.subscribe(() => {
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {openRoutes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
