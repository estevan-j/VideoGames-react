import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './pages/HomePage/HomePage.tsx';
import VideoGame from './pages/VideoGamePage/VideoGame.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <h1>Error PAGE</h1>
    },
    {
      path: '/:videogame',
      element: <VideoGame />,
      errorElement: <h1>Error PAGE</h1>      
    }
  ]

);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
