import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import { App } from '../src/App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App name={2 > 10 ? '10' : '2'} />,
    children: [],
  },
]);
