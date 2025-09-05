import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRout from './MainRout/MainRout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <RouterProvider router={router} />,
  </StrictMode>,
)
