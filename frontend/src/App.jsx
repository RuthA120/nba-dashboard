import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import Questions from './pages/Questions';
import UserNameCreation from './pages/UserNameCreation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/usernamecreation" element={<UserNameCreation />} />
      </Routes>
    </Router>
  );
}
