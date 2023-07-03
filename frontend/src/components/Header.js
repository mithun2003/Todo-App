import React from 'react'
import { CiLogout } from 'react-icons/ci'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to='/'>
          <p className="btn btn-ghost normal-case text-xl">TODO</p>
        </Link>
      </div>

      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <Link to="/">
            <li> Home </li>
          </Link>


        </ul>
      </div> */}
      <div className="navbar-end">


          <Link to="/user/logout">
          <label className="btn btn-sm btn-ghost  bg-[#FE6F5E] hover:bg-[#a51313] text-white btn-circle mx-5">
            <CiLogout  size="25px"/>
          </label>
        </Link>
      </div>
    </div>
  )
}

export default Header







