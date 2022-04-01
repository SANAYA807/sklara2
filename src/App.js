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

function App() {
  const [userdata, setUserData] = useState(null)
  const { token } = isAutheticated()
  //console.log(token)

  useEffect(() => {
    getUser()

  }, []);
  //getting user profile
  const getUser = async () => {
    try {
      const response = await axios.get(`${API}/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      //console.log(response)

      setUserData(response.data.data);

    }
    catch (err) {
      console.log(err);
    };
  }
  console.log(userdata)

  return (
    <Router>

      {userdata && <Navbar userdata={userdata} />}
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/market-place" element={<MarketPlace userdata={userdata} />}></Route>
        <Route exact path="/profile" element={<Profile userdata={userdata} />}></Route>
        <Route exact path="/coachprofile" element={<CoachProfile userdata={userdata} />}></Route>
        {/* <Route exact path="/dashboard" element={<ProfileDashboard userdata={userdata} />}></Route> */}
        <Route exact path="/sp_dashboard" element={<SPDashboard userdata={userdata} />}></Route>
        <Route exact path="/trainer_profile" element={<TrainerProfile userdata={userdata} />}></Route>
        <Route exact path='/changePassword' element={<ChangePassword userdata={userdata} />}></Route>
        <Route exact path='/dashboard' element={<NewDashboard userdata={userdata} />}></Route>



        <Route exact path='*' element={<NotFound />} />
      </Routes>
      {userdata && <Footer />}
    </Router>

  );
}

export default App;
