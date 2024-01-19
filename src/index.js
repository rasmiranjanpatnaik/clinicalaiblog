import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './page/ErrorPage'
import Home from './page/Home'
import Postdetails from './page/Postdetails'
import Register from './page/Register'
import Login from './page/Login'
import UserProfile from './page/UserProfile'
import CreatePost from './page/CreatePost'
import EditPost from './page/EditPost'
import CategoryPosts from './page/CatagoryPosts'
import AuthorPosts from './page/AuthorPost'
import Authors from './page/Authors'
import Dashboard from './page/Dashboard'
import Logout from './page/Logout'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/> },
      {path: "posts/:id", element: <Postdetails/> },
      {path: "register", element: <Register/> },
      {path: "login", element: <Login/> },
      {path: "profile/:id", element: <UserProfile/> },
      {path: "authors", element: <Authors/> },
      {path: "create", element: <CreatePost/> },
      {path: "post/categories/:category", element: <CategoryPosts/> },
      {path: "/posts/users/sdfsdf", element: <AuthorPosts/> },
      {path: "mypost/:id", element: <Dashboard/> },
      {path: "post/:id/edit", element: <EditPost/> },
      {path: "logout", element: <Logout/> },
    ]
  }
])
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

