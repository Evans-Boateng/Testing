import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import All from './pages/All'
import Personal from './pages/Personal'
import Home from './pages/Home'
import Business from './pages/Business'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './ProtectedRoute'
import AuthProvider from './AuthProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><HomePage /></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <All />
      },
      {
        path: "/personal",
        element: <Personal />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/business",
        element: <Business />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
