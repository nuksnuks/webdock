import React from 'react'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

function Header() {

  

  const loggedIn = localStorage.getItem("user") !== null;
  return (
    <>
      {loggedIn ? <UserNav/> : <GuestNav/>}
    </>
  )
}

export default Header