
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
<<<<<<< HEAD
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';

=======
import ProfileDashboard from './pages/profileDashboard/ProfileDashboard';
>>>>>>> 7d76444cb407e4c5a5954b3a07a0504507a7f7c3

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
      </Routes>
=======
 <Routes>
   <Route exact path="/" element={<Login/>}/>
   <Route exact path="/dashboard" element={<ProfileDashboard/>}/>
 </Routes>
>>>>>>> 7d76444cb407e4c5a5954b3a07a0504507a7f7c3
    </Router>

  );
}

export default App;
