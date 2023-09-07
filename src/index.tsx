import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider,  } from 'react-router-dom';
// import router from '../router';
import {App} from './App.tsx'

const root = createRoot(document.getElementById('root')!);
root.render(
  // <StrictMode>
  //   <RouterProvider router={router}></RouterProvider>
  // </StrictMode>
  <StrictMode>
      <App name='pan'/>
  </StrictMode>
)
