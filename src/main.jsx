import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Home/Home.jsx';
import Login from './Layout/Login.jsx';
import Signup from './Layout/Signup.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PostToy from './Layout/PostToy';
import AllToy from './pages/AllToy';
import MyPost from './pages/MyPost';
import SingleSpecific from './pages/SingleSpecific';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>

      },
      {
        path: '/addPost',
        element: <PostToy></PostToy>
      },
      {
        path : '/allPostedToy',
        element : <AllToy></AllToy>
      },
      {
        path : '/myPosted',
        element : <MyPost></MyPost>
      },
      {
        path : '/category/:id',
        element : <SingleSpecific></SingleSpecific>,
        loader : ({params})=> fetch(`http://localhost:5000/toys/singleToys/${params.id}`)
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </React.StrictMode>,
  </div>
)
