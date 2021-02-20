import React from 'react';

import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import './static/css/reset.css';
import routes from '@/routes';
import { HashRouter } from 'react-router-dom';
import Login from '@/views/Login';
console.log('renderRoutes---', renderRoutes);
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Login />
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
