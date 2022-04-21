import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LogoutIcon from '@mui/icons-material/Logout';
import { isAutheticated, signout } from '../auth/authhelper';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';


import './navbar.css'
import { FolderCopyOutlined, ManageAccounts, Password, People } from '@mui/icons-material';

const Navbar = ({ userdata }) => {
  const navigate = useNavigate()
  let location = useLocation();
  const ActiveClr = (curr) => {
    if (location.pathname === curr) {
      return "active";
    }
  };
  //console.log(userdata)
  const signOut = () => {
    navigate('/')
    signout()
  }

  const modeChanger = (mode)=>{
    userdata.mode = mode
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userData: userdata
      }))
    swal('Success', 'Mode changed successfully', 'success').then(() => {
      window.location.reload()
    })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-div" style={{ backgroundColor: "transparent", padding: '1rem 4%' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard"><img src={'./assets/sklaralogo.svg'} className="sklara-logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

            <form className="d-flex search_bar">
              <Search />
              <input className="form-control search-input" type="search" placeholder={'Search'} aria-label="Search" />

            </form>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <div className='d-flex'>
                <li className="nav-item box">
                  <Link className="nav-link" to="/"><NotificationsOutlinedIcon /></Link>
                </li>
                <li className="nav-item box">
                  <Link className="nav-link" to="/"><EmailOutlinedIcon /></Link>
                </li>

                <div class="btn-group dropafter box" style={{ width: '190px' }}>
                  <button type="button" className="btn dropdown-toggle d-flex justify-content-between align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                   
                    {userdata && userdata.profilePicture ? 
                    <img src={userdata.profilePicture} className="dp-logo" alt='profile image' />
                      :
                      <AccountCircleOutlinedIcon style={{ marginRight: '20px',fontSize:"30px"}} />
                    }
                    <>
                    {userdata && userdata.firstName}
                    <KeyboardArrowDownOutlinedIcon/>
                   </>
                  </button>
                  <ul class="dropdown-menu" style={{ width: '220px' }}>
                    {/* <li><AccountCircleOutlinedIcon /> {userdata && userdata.firstName} </li>
                    <li><hr class="dropdown-divider" /></li> */}
                    <li><Link className="nav-link" to="/"><PersonAddAltOutlinedIcon /> Learning Dashboard</Link></li>
                    <li><Link className="nav-link" to="/profile"><SettingsIcon /> My Profile</Link></li>
                    <li onClick={()=>modeChanger(userdata.mode === 'training' ?'coaching' : 'training')}><Link className="nav-link" to="">
                    <VisibilityIcon/> {userdata.mode === 'training' ? 'Switch to Training' : 'Switch to Coaching'}  
                    </Link></li>
                    <li><Link className="nav-link" to="/"><ContentCopyOutlinedIcon /> Booking Requests</Link></li>
                    <li><Link className="nav-link" to="/"><TranslateOutlinedIcon /> Language</Link></li>

                    <li><Link className="nav-link" to="/changePassword"><Password /> Change Password</Link></li>
                   
                    <li><hr class="dropdown-divider" /></li>
                    {userdata && userdata.userType === 'hr' &&
                      <li><Link className="nav-link" to="/employee_list"><People /> Your Employees</Link></li>
                    }
                     <li><hr class="dropdown-divider" /></li>
                    {isAutheticated() &&
                      <li><Link className="nav-link" to="/" onClick={signOut}><LogoutIcon /> Logout</Link></li>
                    }
                  </ul>
                </div>
              </div>
            </ul>

          </div>
        </div>
      </nav>

      {/* bottom navigation */}

      <nav className="navbar navbar-expand-lg navbar-light  nav-div px-5" style={{ backgroundColor: "transparent", borderBottom: '1px solid lightGray' }}>
        <div className="container-fluid">
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <div className='d-flex'>
                <li className={`nav-item ${ActiveClr("/")}`}>
                  <Link className="nav-link" to="/"><HomeOutlinedIcon /> Home</Link>
                </li>
                <li className={`nav-item ${ActiveClr("/calendar")}`}>
                  <Link className="nav-link" to="/calendar"><EventOutlinedIcon /> Learning Plan</Link>
                </li>
                <li className={`nav-item ${ActiveClr("/market_place")}`}>
                  <Link className="nav-link" to="/market_place"><ShopTwoOutlinedIcon /> Market Place</Link>
                </li>
                <li className={`nav-item ${ActiveClr("/focus_skill")}`}>
                  <Link className="nav-link" to="/focus_skill"><FilterCenterFocusOutlinedIcon /> Focus Area</Link>
                </li>

                {userdata && userdata.userType === 'hr' &&
                <li className={`nav-item ${ActiveClr("/employee_list")}`}>
                  <Link className="nav-link" to="/employee_list"><FolderCopyOutlined/> Manage</Link>
                </li>
                }
                {userdata && userdata.userType === 'supplier' &&
                <li className={`nav-item ${ActiveClr("/EventManage")}`}>
                  <Link className="nav-link" to="/EventManage"><FolderCopyIcon /> Manage</Link>
                </li>
                  }
              </div>
            </ul>
          </div>
          {/*userdata && userdata._id &&
          <ul className="navbar-nav mb-2 mb-lg-0">
          <div className='d-flex'>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <SchoolOutlinedIcon style={{ color: 'green' }} /> {userdata.mode === 'training' ? 'Training Mode' : 'Coaching Mode'}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={()=>modeChanger(userdata.mode === 'training' ?'coaching' : 'training')}><Link className="dropdown-item" to="/">
                    <CastForEducationOutlinedIcon style={{ color: "blue" }} /> {userdata.mode === 'training' ?'Coaching Mode' : 'Training Mode'}</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown dropleft">
                <Link className="nav-link dropdown-toggle dropleft" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={'./assets/britishflag.png'} className='language-logo' /> English
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">
                    <img src={'./assets/germanflag.png'} className='language-logo' /> German</Link></li>
                </ul>
              </li>
            </div>
          </ul>
                */}
        </div>
      </nav>
    </>
  )
}

export default Navbar

