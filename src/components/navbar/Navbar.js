import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import './navbar.css'

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Sklara</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      
    <form className="d-flex">
        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary search-btn" type="submit"><Search/></button>
      </form>
      
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/"><NotificationsOutlinedIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><EmailOutlinedIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile"><AccountCircleOutlinedIcon/></Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/" tabIndex={-1} aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
     
    </div>
  </div>
</nav>

    )
}

export default Navbar

