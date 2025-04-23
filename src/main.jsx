import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
