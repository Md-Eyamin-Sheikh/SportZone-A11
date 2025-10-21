import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRout from './MainRout/MainRout.jsx';
import LoginPage from './Page/Authentication System/LoginPage.jsx';
import RegisterPage from './Page/Authentication System/RegisterPage.jsx';
import HomePage from './Page/HomePage/HomePage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import CreateEvent from './Page/EventManagement/CreateEvent.jsx';
import EventDetailsPage from './Page/EventManagement/EventDetailsPage.jsx';
import MyBookings from './Page/EventManagement/MyBookings.jsx';
import ManageEvents from './Page/EventManagement/ManageEvents.jsx';
import UpdateEvent from './Page/EventManagement/UpdateEvent.jsx';
import SearchEvents from './Page/EventManagement/SearchEvents.jsx';
import SeeAllEvents from './Page/EventManagement/SeeAllEvents.jsx';
import PopularSports from './Page/HomePage/PopularSports.jsx';
import About from './Page/About.jsx';
import Testimonials from './Page/HomePage/Testimonials.jsx';
// import { path } from 'framer-motion/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout/>,
    children:[
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path:"/loginpage",
        element: <LoginPage/>

      },
      {
        path:"/register-page",
        element:<RegisterPage/>
      },
      {
        path:"/createvent",
        element: <CreateEvent/>
      },
      {
        path:"/evendetails/:id",
        element:<EventDetailsPage/>
      },
      {
        path: "/my-bookings",
        element: <MyBookings/>
      },
      {
        path: "/manageevents",
        element: <ManageEvents/>
      },
      {
        path: "/update-event/:id",
        element:<UpdateEvent/>
      },
      {
        path:"/events",
        element:<SearchEvents/>
      },
      {
        path:"/all-events",
        element:<SeeAllEvents/>
      },
      {
        path:"/popularsports",
        element:<PopularSports/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/testimonials",
        element:<Testimonials/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
