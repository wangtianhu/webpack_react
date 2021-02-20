import React from 'react';

import Loadable from 'react-loadable';

import { Spin } from 'antd';

console.log(() => import('@/views/Login'));
const Login = Loadable({
  loader: () => import('@/views/Login'),
  loading() {
    return <div>sssssss</div>;
  }
});

export default {
  Login
};
