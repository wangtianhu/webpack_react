import React from 'react';
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon, message } from 'antd';
import './style.less';
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginForm: {
        username: '',
        password: ''
      },
      signForm: {
        username: '',
        email: '',
        password: ''
      }
    };
  }
  handSubmit = () => {
    console.log(1111);
    let { loginForm } = this.state;
    if (!loginForm.username) {
      return message.error('用户名不能为空');
    }
    if (!loginForm.password) {
      return message.error('密码不能为空');
    }
  };
  handSubmitUp = () => {
    console.log(22222);
    let error = {
      username: '用户名不能为空',
      email: '邮箱不能为空',
      password: '密码不能为空'
    };
    let { signForm } = this.state;
    for (const key in signForm) {
      if (Object.hasOwnProperty.call(signForm, key)) {
        if (!signForm[key]) {
          return message.error(error[key]);
        }
      }
    }
  };
  handChangeInput = (e, name, type) => {
    if (type === 'loginForm') {
      let { loginForm } = this.state;
      loginForm[name] = e.target.value;
      this.setState({ loginForm });
    } else {
      let { signForm } = this.state;
      signForm[name] = e.target.value;
      this.setState({ signForm });
    }
  };
  render() {
    return (
      <div className='login-wrapper'>
        <div className='container'>
          <div className='common sign-in-wrapper'>
            <form id='form-sign-in' onSubmit={this.handSubmit}>
              <h1>登录</h1>
              <input
                className='user'
                value={this.state.loginForm.username}
                onChange={(e) => this.handChangeInput(e, 'username', 'loginForm')}
                type='text'
              />
              <input
                className='password'
                onChange={(e) => this.handChangeInput(e, 'password', 'loginForm')}
                value={this.state.loginForm.password}
                type='password'
              />
              <p>忘记密码</p>
              <button type='submit'>登录</button>
            </form>
          </div>
          <div className='common sign-up-wrapper'>
            <form id='form-sign-up' onSubmit={this.handSubmitUp}>
              <h1>注册</h1>
              <input
                placeholder='用户名'
                value={this.state.signForm.username}
                onChange={(e) => this.handChangeInput(e, 'username', 'signForm')}
                type='text'
              />
              <input
                placeholder='邮箱'
                onChange={(e) => this.handChangeInput(e, 'email', 'signForm')}
                value={this.state.signForm.email}
                type='text'
              />
              <input
                className='password'
                placeholder='密码'
                onChange={(e) => this.handChangeInput(e, 'password', 'signForm')}
                value={this.state.signForm.password}
                type='password'
              />
              <p>忘记密码</p>
              <button type='submit'>登录</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
