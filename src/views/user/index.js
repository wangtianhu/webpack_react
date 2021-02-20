import { render } from 'less';
import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Reg from './Reg';
import Login from './Login';

export default class UserIndex extends React.Component {
  render() {
    return (
      <div className='userIndex'>
        <h1>用户中心</h1>
        <ul>
          <li>
            <Link to='/user/reg'>注册</Link>
          </li>
          <li>
            <Link to='/user/login'>登录</Link>
          </li>
        </ul>

        {/* 路由配置   */}
        {/* <Switch> */}
        <Route path='/user/reg' component={Reg}></Route>
        <Route path='/user/login' component={Login}></Route>
        {/* </Switch> */}
      </div>
    );
  }
}
