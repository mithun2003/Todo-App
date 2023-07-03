import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PublicRoute() {
  const access = localStorage.getItem('access')
  return (
    access ?  <Navigate to='/'/> : <Outlet/> 
  )
}

export default PublicRoute