import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '../css/index.css';
const root = createRoot(document.getElementById('app'));
import router from '../router';

root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
