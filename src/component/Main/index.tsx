import React from 'react';
// import { useRoutes,Routes ,Route} from "react-router-dom";
import { Routes ,Route} from "react-router-dom";
// import {routes} from '../../router';
import MyChart from '../MyChart';
import Statistics from '../Statistics';
import MonthExpenses from '../MonthExpenses';
import NotFind from '../NotFind';

export  default function Main(){
    return <Routes>
        <Route path="/" Component={MyChart}/>
        <Route path="/myChart" Component={MyChart}/>
        <Route path="/Statistics" Component={Statistics}/>
        <Route path="/MonthExpenses" Component={MonthExpenses}/>
        <Route path="*" Component={NotFind}/>
      </Routes> 
};
