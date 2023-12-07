import React from 'react'
import GuestNav from '../components/GuestNav'
import UserNav from '../components/UserNav'

function Header() {

  const params = new URLSearchParams(window.location.search);

  const hasParams = params.has("ssoToken");
  return (
    <>
      {hasParams ? <UserNav/> : <GuestNav/>}
    </>
  )
}

export default Header