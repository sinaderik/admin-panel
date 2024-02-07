import React from 'react'
import Login from './features/identity/components/Login'
import Register from './features/identity/components/register'
import { RouterProvider } from 'react-router-dom'
import router from './router'


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
