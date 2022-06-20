import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'

const home = () => {
  return (
    <header className="header">
    <div className="logo">Home</div>
    <nav className="nav">
      <ul>
        <li>
          <NavLink to='/addCourse' activeClassName="active">
           Add Courses
          </NavLink>
        </li>
        <li>
          <NavLink to='/new-quote' activeClassName="active">
            Add a GreenCard
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default home