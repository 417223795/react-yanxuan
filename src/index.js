/*
入口js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// 路由
import {HashRouter,Route,Switch} from 'react-router-dom'



import '../src/assets/css/reset.css'

import store from './redux/store'
import App from './containers/app/app'
import './mock/mockServer'
ReactDOM.render((
  // 这里是使用provider管理store
  // 注意如果这里是HashRouter，则里面的组件使用的是withRouter才可以
  // 不可以使用import {connect} from 'react-redux'
  // 暴露出去的时候不可以使用export default connect()(Login)这种形式
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
