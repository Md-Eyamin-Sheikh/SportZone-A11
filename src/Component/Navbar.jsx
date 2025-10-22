/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../Firbas/Firbas';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { ChevronDown, User, Calendar, BookOpen, Settings, LogOut, Trophy, Menu, X, Home, Search, Star, Sparkles } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfileDropdown(false);
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-xl fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto ">
        <motion.div
          className="flex justify-between items-center h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-lg shadow-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white tracking-tight">SportZone</h1>
              <p className="text-xs text-orange-200 hidden sm:block">Athletic Events Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className={`relative px-2 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  isActive('/')
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
                {isActive('/') && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/events"
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  isActive('/events')
                    ? 'bg-orange-700 text-white shadow-lg'
                    : 'text-white hover:text-orange-200 hover:bg-white/10'
                }`}
              >
                <Search className="w-4 h-4 mr-2" />
                All Events
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/ai-assistant"
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  isActive('/ai-assistant')
                    ? 'bg-orange-700 text-white shadow-lg'
                    : 'text-white hover:text-orange-200 hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI Help
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  isActive('/about')
                    ? 'bg-orange-700 text-white shadow-lg'
                    : 'text-white hover:text-orange-200 hover:bg-white/10'
                }`}
              >
                About
              </Link>
            </motion.div>

            {currentUser && (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/createvent"
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      isActive('/createvent')
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-white hover:text-orange-300 hover:bg-white/10'
                    }`}
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Create Event
                    {isActive('/createvent') && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/my-bookings"
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      isActive('/my-bookings')
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-white hover:text-orange-300 hover:bg-white/10'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    My Bookings
                    {isActive('/my-bookings') && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>

                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/manageevents"
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      isActive('/manageevents')
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-white hover:text-orange-300 hover:bg-white/10'
                    }`}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Events
                    {isActive('/manageevents') && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div> */}
              </>
            )}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center">
            {!currentUser ? (
              <div className="space-x-3">
                <Link
                to='/loginpage'
                  className="btn btn-active btn-secondary "
                >
                  Login
                </Link>
                <Link
                to='/register-page'
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Register
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
                    src={currentUser.photoURL || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-orange-300 transition-colors"
                  />
                  <span className="text-white font-medium hidden lg:block">{currentUser.displayName || "User"}</span>
                  <ChevronDown className="w-4 h-4 text-white group-hover:text-orange-300 transition-colors" />
                </button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {showProfileDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                      onMouseLeave={() => setShowProfileDropdown(false)}
                    >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{currentUser.displayName || "User"}</p>
                      <p className="text-sm text-gray-500">Athlete</p>
                    </div>
                     <div className="py-1"> 
                      <Link
                        to="/profile"
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <User className="w-4 h-4 mr-3" />
                        My Profile
                      </Link> 
                      
                      <Link
                        to="/manageevents"
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Manage Events
                      </Link>
                      
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
                    
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-300 transition-colors p-2 rounded-lg hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-orange-700 bg-orange-800/95 backdrop-blur-sm overflow-hidden"
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-1"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
              <Link to="/" className="block px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/events" className="block px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                All Events
              </Link>
              <Link to="/ai-assistant" className="flex items-center px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                <Sparkles className="w-4 h-4 mr-3" />
                AI Help
              </Link>
              <Link to="/about" className="block px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                About
              </Link>
              {currentUser && (
                <>
                  <Link to="/createvent" className="block px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                    Create Event
                  </Link>
                  <Link to="/my-bookings" className="flex items-center px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                    <BookOpen className="w-4 h-4 mr-3" />
                    My Bookings
                  </Link>
                  <Link to="/manageevents" className="flex items-center px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                    <Settings className="w-4 h-4 mr-3" />
                    Manage Events
                  </Link>
                  <Link to="/favorites" className="flex items-center px-3 py-2 text-white hover:text-orange-200 hover:bg-orange-700/50 rounded-md transition-colors">
                    <Star className="w-4 h-4 mr-3" />
                    Favorites
                  </Link>
                </>
              )}
              
              {!currentUser ? (
                <Link
                  to='/loginpage'
                  className="w-full text-left bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-md font-medium mt-3 block"
                >
                  Login
                </Link>
              ) : (
                <div className="border-t border-orange-700 mt-3 pt-3">
                  <div className="flex items-center px-3 py-2 text-white">
                    <img src={currentUser.photoURL || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt="Profile" className="w-8 h-8 rounded-full mr-3" />
                    <span className="font-medium">{currentUser.displayName || "User"}</span>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-2 text-red-300 hover:text-red-200 hover:bg-orange-700/50 rounded-md transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;