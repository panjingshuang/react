import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
// import Main from '../Layout/Main'
const App  = lazy(()=> { return import('../App')})
const Main = lazy(()=> { return import('../Layout/Main')})

export default createBrowserRouter([
  {
    path: '/',
    element: <App name="zhangsan"/>,
    children: [],
  },
  {
    path: '/home',
    element: <Main/>
  },
]);
