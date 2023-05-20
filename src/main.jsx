import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './providers/AuthProviders';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home/Home';
import Main from './Layout/Main';
import AddNewToy from './components/AddNewToy/AddNewToy';
import AllToys from './components/AllToys/AllToys';
import ToyDetails from './components/ToyDetails/ToyDetails';
import MyToys from './components/MyToys/MyToys';
import EditToy from './components/EditToy/EditToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>  
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'addnewtoys',
        element:<AddNewToy></AddNewToy>
      },
      {
        path:'alltoys',
        element:<AllToys></AllToys>
      },
      {
        path:'mytoys',
        element:<MyToys></MyToys>
      },
      {
        path:'toy/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path:'updatetoy/:id',
        element:<EditToy></EditToy>,
        loader:({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  
)
