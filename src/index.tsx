import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import routes from './router/routes';
import RouterView from './router/RouterView';
import {HashRouter} from 'react-router-dom';

// 引入mobx
import { Provider } from 'mobx-react';
import store from "./store"

// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider {...store}>
      <HashRouter>
          <RouterView routes={routes}></RouterView>
      </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
