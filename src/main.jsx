import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Loyout/Main'
import ErrorPage from './ErrorPage/ErrorPage'
import CollageDetails from './components/Home/CollageDetails'
import Home from './components/Home/Home'


const router = createBrowserRouter([
  {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
          {
            path: "/:id",
            element: <CollageDetails></CollageDetails>,
            loader: ({params}) => fetch("/fakeData.json")
          }
      ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router={router} />
  
  </React.StrictMode>,
)
