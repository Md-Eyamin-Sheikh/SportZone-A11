import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import { ChevronDown, User, Calendar, BookOpen, Settings, LogOut, Trophy, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock user data
  const user = {
    name: "Alex Johnson",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-lg shadow-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white tracking-tight">SportZone</h1>
              <p className="text-xs text-blue-200 hidden sm:block">Athletic Events Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200 font-medium">
              Events
            </a>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center">
            {!isLoggedIn ? (
              <div className="space-x-3">
                <Link 
                to='/loginpage'
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-1 pr-3 hover:bg-white/20 transition-all duration-200 group"
                >
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-orange-300 transition-colors"
                  />
                  <span className="text-white font-medium hidden lg:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-white group-hover:text-orange-300 transition-colors" />
                </button>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div 
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">Athlete</p>
                    </div>
                    <div className="py-1">
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                        <Calendar className="w-4 h-4 mr-3" />
                        Book an Event
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                        <BookOpen className="w-4 h-4 mr-3" />
                        My Bookings
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                        <Settings className="w-4 h-4 mr-3" />
                        Manage Events
                      </a>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-300 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-700 bg-blue-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-white hover:text-orange-300 hover:bg-blue-700/50 rounded-md transition-colors">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-orange-300 hover:bg-blue-700/50 rounded-md transition-colors">
                Events
              </a>
              
              {!isLoggedIn ? (
                <button
                  onClick={handleLogin}
                  className="w-full text-left bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-md font-medium mt-3"
                >
                  Login
                </button>
              ) : (
                <div className="border-t border-blue-700 mt-3 pt-3">
                  <div className="flex items-center px-3 py-2 text-white">
                    <img src={user.profilePicture} alt="Profile" className="w-8 h-8 rounded-full mr-3" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <a href="#" className="flex items-center px-3 py-2 text-white hover:text-orange-300 hover:bg-blue-700/50 rounded-md transition-colors">
                    <Calendar className="w-4 h-4 mr-3" />
                    Book an Event
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-white hover:text-orange-300 hover:bg-blue-700/50 rounded-md transition-colors">
                    <BookOpen className="w-4 h-4 mr-3" />
                    My Bookings
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-white hover:text-orange-300 hover:bg-blue-700/50 rounded-md transition-colors">
                    <Settings className="w-4 h-4 mr-3" />
                    Manage Events
                  </a>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-2 text-red-300 hover:text-red-200 hover:bg-blue-700/50 rounded-md transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;