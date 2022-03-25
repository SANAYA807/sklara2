import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
  //console.log(userdata)

  return (
    <Router>

      {!userdata ?
        <Routes>
          <Route path='*' element={<Login />} />
        </Routes>
        :
        <>
          <Navbar userdata={userdata} />
          <Routes>
            <Route exact path="/profile" element={<Profile userdata={userdata} />}></Route>
            <Route exact path="/coachprofile" element={<CoachProfile />}></Route>

            <Route exact path="/market-place" element={<MarketPlace userdata={userdata} />}></Route>

            <Route exact path="/dashboard" element={<ProfileDashboard userdata={userdata} />} />
            <Route exact path="/trainer_profile" element={<TrainerProfile />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      }
    </Router>

  );
}

export default App;
