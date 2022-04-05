import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Calender/Calender.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';
import MarketPlace from './pages/MarketPlace/MarketPlace';

import ProfileDashboard from './pages/profileDashboard/ProfileDashboard';
import CoachProfile from './pages/CoachProfile/CoachProfile';
import { isAutheticated } from './components/auth/authhelper';
import axios from 'axios';
import { API } from './API';
import NotFound from './pages/notFound/NotFound';
import TrainerProfile from './pages/TrainerProfile/TrainerProfile';
import ChangePassword from './pages/changePassword/ChangePassword';
import SPDashboard from './pages/SPDashboard';
import { Dashboard } from '@mui/icons-material';
import NewDashboard from './pages/NewDashboard/NewDashboard';
import AddSkill from './pages/supplier/AddSkill';
import SpDashboard from './pages/NewDashboard/SP_dashboard';
import ManageSkill from './pages/supplier/ManageSkill';
import Skill from './pages/supplier/Skill';

function App() {
  const [userdata, setUserData] = useState(null)
  const { token } = isAutheticated()
  //console.log(token)

  useEffect(() => {
    getUser()

  }, []);
  //getting user profile
  const getUser = async () => {
    let existanceData = JSON.parse(localStorage.getItem("userData"));
    if (existanceData) {
      // console.log(existanceData.userData)
      setUserData(JSON.parse(localStorage.getItem("userData")).userData);
    } else {
      try {
        console.log('requesting user data from server')
        const response = await axios.get(`${API}/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        //console.log(response)

        //setUserData(response.data.data);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userData: response.data.data
          })
        );
        setUserData(JSON.parse(localStorage.getItem("userData")).userData);

      }
      catch (err) {
        console.log(err);
      };
    }

  }
  console.log(userdata)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={userdata && userdata._id ? <NewDashboard userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/market_place" element={userdata && userdata._id ? <MarketPlace userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/profile" element={userdata && userdata._id ? <Profile userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/coachprofile" element={userdata && userdata._id ? <CoachProfile userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/old_dashboard" element={userdata && userdata._id ? <ProfileDashboard userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/dashboard" element={userdata && userdata._id ? <NewDashboard userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/trainer_profile" element={userdata && userdata._id ? <TrainerProfile userdata={userdata} /> : <Login />}></Route>
        <Route exact path='/changePassword' element={userdata && userdata._id ? <ChangePassword userdata={userdata} /> : <Login />}></Route>
        {/* <Route exact path="/sp_dashboard" element={userdata && userdata._id ? <SPDashboard userdata={userdata} /> : <Login />}></Route> */}
        <Route exact path="/sp_dashboard" element={userdata && userdata._id ? <><Navbar userdata={userdata} /><SpDashboard userdata={userdata} /> <Footer /> </> : <Login />}></Route>
        <Route exact path="/add_skill" element={userdata && userdata._id ? <AddSkill userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/manage_skill" element={userdata && userdata._id ? <ManageSkill userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/focus_skill" element={userdata && userdata._id ? <Skill userdata={userdata} /> : <Login />}></Route>
        <Route exact path='*' element={<NotFound userdata={userdata} />} />
      </Routes>
    </Router>

  );
}

export default App;
