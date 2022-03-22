
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <Router>
 <Navbar/>
      <Login />
    </Router>
    
  );
}

export default App;
