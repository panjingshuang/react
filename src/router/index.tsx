import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const App  = lazy(()=> { return import('../App')})
const MonthExpenses  = lazy(()=> { return import('../component/MonthExpenses')})
const Statistics  = lazy(()=> { return import('../component/Statistics')})
const MyChart  = lazy(()=> { return import('../component/MyChart')})
const NotFind = lazy(()=>{return import('../component/NotFind')})

export const routes  = [
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/MyChart',
        element: <MyChart/>
      },
      {
        path: '/Statistics',
        element: <Statistics/>
      },
      {
        path: '/MonthExpenses',
        element: <MonthExpenses/>
      },{
        path: '/404',
        element: <NotFind/>
      }
    ]
  },
  { path: '*', element: <Navigate to="/404" replace /> }
]
export default createBrowserRouter(routes);
