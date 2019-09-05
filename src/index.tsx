import * as React from 'react';
import * as ReactDOM from 'react-dom';

//引入路由
import RouterView from "./router/index";
import router from "./router/routeList";
import { BrowserRouter } from "react-router-dom";
//antd 引入全局样式
import "antd/dist/antd.css";

//引入全局样式
import './index.css';

//引入mobx实例
import { Provider } from "mobx-react";

//引入仓库
import store from "./store/index"

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <RouterView routes={router.routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

