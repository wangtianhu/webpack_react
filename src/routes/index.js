import React from 'react';

import { Redirect } from 'react-router-dom';

import RouteComponents from './components';
console.log('RouteComponents---,', RouteComponents);
const routes = [
  {
    path: '/login',
    requiredAuth: false,
    component: RouteComponents.Login
  }
];

export default routes;
