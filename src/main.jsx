import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import JobDetails from './Component/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader: ()=>fetch('jobs.json')
      },
      {
        path:'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
   
  </React.StrictMode>,
)
