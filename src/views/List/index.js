import React from 'react';

import { Link } from 'react-router-dom';

import { createBrowserHistory } from 'history';
// 生成 histroy

let history = createBrowserHistory({
  // 配置强制刷新，如果不刷新，则没有反应，需要手动刷新才会跳转
  forceRefresh: true
});

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h1>列表页</h1>
        <ul>
          <li>
            <Link to='/detail/1'>第一号商品</Link>
          </li>
          <li>
            <Link to='/detail/2'>第二号商品</Link>
          </li>
          <li>
            {/* <Link to='/detail/3'>第三号商品</Link> */}
          </li>
        </ul>
        <p>............</p>
        <button onClick={() => history.push('/detail/100')}> 第一百号商品</button>
      </div>
    );
  }
}
