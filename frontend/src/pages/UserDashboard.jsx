import { usestate } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDashboard.css';

export default function UserDashboard(){

    return(
        <nav className="dashboard-nav">
            <h1 className="dashboard-title">User Dashboard</h1>
            <ul className="dashboard-menu">
                <li className="dashboard-item"><a href="/userdashboard">Home</a></li>
                <li className="dashboard-item"><a href="/userdashboard/profile">Profile</a></li>
                <li className="dashboard-item"><a href="/userdashboard/friends">Friends</a></li>
                <li className="dashboard-item"><a href="/userdashboard/settings">Settings</a></li>
                <li className="dashboard-item"><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}