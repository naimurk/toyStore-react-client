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
import SingleMySpecific from './pages/SingleMySpecific';
import Error from './Layout/Error';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <Error></Error>,
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
        loader : ({params})=> fetch(`https://toy-new-server-naimurk.vercel.app/toys/singleToys/${params.id}`)
      },
      {
        path : '/posted/:id',
        element : <SingleMySpecific></SingleMySpecific>,
        loader : ({params}) => fetch(`https://toy-new-server-naimurk.vercel.app/postedToy/${params.id}`)
      },
      {
        path : '/blog', 
        element : <Blog></Blog>
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:max-w-7xl w-full lg:mx-auto'>
    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </React.StrictMode>,
  </div>
)
