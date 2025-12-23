import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="profile">Profile</Link> <br></br>
      <Link to="settings">Settings</Link>
      <Outlet />
    </>
  )
}
