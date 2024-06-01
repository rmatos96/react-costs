import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Company from './components/pages/Company.jsx'
import Contact from './components/pages/Contact.jsx'
import NewProject from './components/pages/NewProject.jsx'
import Projects from './components/pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [ 
      { path: '/home', element: <Home /> },
      { path: '/company', element: <Company /> },
      { path: '/contact', element: <Contact /> },
      { path: '/newproject', element: <NewProject /> },
      { path: '/projects', element: <Projects /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
