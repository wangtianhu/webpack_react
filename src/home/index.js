import React from 'react';
import './test.less';
import './test.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className='home' style={{ width: 360, height: 100, color: 'red' }}>
        我是home组件
      </div>
    );
  }
}
