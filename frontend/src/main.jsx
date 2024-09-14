import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import All from './pages/All'
import Personal from './pages/Personal'
import Home from './pages/Home'
import Business from './pages/Business'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
