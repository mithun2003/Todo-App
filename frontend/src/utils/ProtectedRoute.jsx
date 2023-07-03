import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
  const access = localStorage.getItem('access')
  return (
    access ?   <Outlet/> : <Navigate to='/user/login'/> 
  )
}

export default ProtectedRoute