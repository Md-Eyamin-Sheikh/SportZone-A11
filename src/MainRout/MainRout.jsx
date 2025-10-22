import React from 'react';
import { Outlet } from "react-router-dom"
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import BottomNav from '../Component/ButtomNav';

const handleTabChange = (tab) => {
    setActiveTab(tab);
    // close sidebar on mobile
    setIsMenuOpen(false);
    switch (tab) {
      case 'home':
        navigate('/');
        break;
      case 'alerts':
        navigate('/alerts');
        break;
      case 'community':
        navigate('/community');
        break;
      case 'more':
        navigate('/more');
        break;
      default:
        // fallback to home
        navigate('/');
    }
  };

const MainRout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>

             {/* Fixed Bottom Navigation (Mobile) */}
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
            
        </div>
    );
};

export default MainRout;