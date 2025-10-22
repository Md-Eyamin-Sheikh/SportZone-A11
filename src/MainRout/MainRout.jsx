import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import BottomNav from '../Component/ButtomNav';

const MainRout = () => {
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        switch (tab) {
            case 'home':
                navigate('/');
                break;
            case 'events':
                navigate('/all-events');
                break;
            case 'create':
                navigate('/createvent');
                break;
            case 'ai-assistant':
                navigate('/ai-assistant');
                break;
            case 'profile':
                navigate('/profile');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
    );
};

export default MainRout;