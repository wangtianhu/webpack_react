import React from 'react';

import { createBrowserHistory } from 'history';
// 生成 history

// let history = createBrowserHistory();
export default class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h2>商品详情页面</h2>
        <h4>{`发起axios请求获取${this.props.match.params.id}号商品的数据`}</h4>

        <button onClick={() => this.props.history.goBack()}>返回</button>
      </div>
    );
  }
}
