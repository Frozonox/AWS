import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Administradores from './components/Admins/Administradores.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nando",
    element: <Administradores />,
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)