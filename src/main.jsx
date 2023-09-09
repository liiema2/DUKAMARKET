import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "./assets/css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './router.jsx'
import Provider from "@reduxjs/toolkit"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>

     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
