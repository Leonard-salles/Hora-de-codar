import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreatePost from './Pages/CreatePost/CreatePost';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/posts/create",
      element: <CreatePost />
    },
  ]
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
