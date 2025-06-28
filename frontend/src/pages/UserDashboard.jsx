import { usestate } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDashboard.css';
import bballIMG from '../assets/b-ball.png';

export default function UserDashboard(){

    return(
        <nav className="dashboard-nav">
            <img src={bballIMG} className="bball-img" />
            <h1 className="dashboard-title">NBA Dashboard</h1>
            <ul className="dashboard-menu">
                <p className="dashboard-item"><a href="">Search</a></p>
                <p className="dashboard-item"><a href="">Power Rankings</a></p>
                <p className="dashboard-item"><a href="">Similarity Engine</a></p>
                <p className="dashboard-item"><a href="">MVP Builder</a></p>
                <p className="dashboard-item"><a href="">My Dashboard</a></p>
            </ul>
        </nav>
    );
}