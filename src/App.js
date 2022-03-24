
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';
import MarketPlace from './pages/MarketPlace/MarketPlace';

import ProfileDashboard from './pages/profileDashboard/ProfileDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/market-place" element={<MarketPlace />}></Route>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<ProfileDashboard />} />
      </Routes>
    </Router>

  );
}

export default App;
