
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import ProfileDashboard from './pages/profileDashboard/ProfileDashboard';

function App() {
  return (
    <Router>
 <Routes>
   <Route exact path="/" element={<Login/>}/>
   <Route exact path="/dashboard" element={<ProfileDashboard/>}/>
 </Routes>
    </Router>
    
  );
}

export default App;
