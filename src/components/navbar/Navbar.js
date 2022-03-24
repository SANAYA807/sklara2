import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';

import './navbar.css'

const Navbar = () => {
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light bg-light nav-div px-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={'./assets/sklaralogo.svg'} className="sklara-logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      
    <form className="d-flex">
        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary search-btn" type="submit"><Search/></button>
      </form>
      
      <ul className="navbar-nav mb-2 mb-lg-0">
        <div className='d-flex'>
        <li className="nav-item">
          <Link className="nav-link" to="/"><NotificationsOutlinedIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><EmailOutlinedIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile"><AccountCircleOutlinedIcon/></Link>
        </li>
        </div>
      </ul>
     
    </div>
  </div>
</nav>

{/* bottom navigation */}

<nav className="navbar navbar-expand-lg navbar-light bg-light shadow nav-div px-5">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">  
      <ul className="navbar-nav mb-2 mb-lg-0">
        <div className='d-flex'>
        <li className="nav-item">
          <Link className="nav-link" to="/"><HomeOutlinedIcon/> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><EventOutlinedIcon/> Learning Plan</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/market-place"><ShopTwoOutlinedIcon/> Market Place</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><FilterCenterFocusOutlinedIcon/> Focus Area</Link>
        </li>
        </div>
        </ul>     
    </div>
    <ul className="navbar-nav mb-2 mb-lg-0">
        <div className='d-flex'>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <SchoolOutlinedIcon style={{color:'green'}}/> Training Mode
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">
              <CastForEducationOutlinedIcon style={{color:"blue"}}/> Coaching Mode</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown dropleft">
          <Link className="nav-link dropdown-toggle dropleft" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img src={'./assets/britishflag.png'} className='language-logo'/> English
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">
            <img src={'./assets/germanflag.png'} className='language-logo'/> German</Link></li>
          </ul>
        </li>
        </div>
      </ul>
  </div>
</nav>
</>
    )
}

export default Navbar

