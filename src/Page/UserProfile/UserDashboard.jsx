import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Calendar, Trophy, BookOpen, Settings, Bell, 
  TrendingUp, MapPin, Clock, Star, Plus, Edit3,
  Activity, Users, Target, Award
} from 'lucide-react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    completedEvents: 0,
    totalBookings: 0
  });
  const [recentEvents, setRecentEvents] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    // Fetch user statistics and recent activities
    fetchUserStats();
    fetchRecentEvents();
    fetchUpcomingBookings();
  }, [user]);

  const fetchUserStats = async () => {
    try {
      if (user?.email) {
        // Fetch user's events
        const eventsRes = await fetch(`https://sport-zone-survar.vercel.app/manageEvents?email=${user.email}`);
        const events = await eventsRes.json();
        
        // Fetch user's bookings
        const bookingsRes = await fetch(`https://sport-zone-survar.vercel.app/myBookings?email=${user.email}`);
        const bookings = await bookingsRes.json();

        setStats({
          totalEvents: events.length,
          upcomingEvents: events.filter(e => new Date(e.event_date) > new Date()).length,
          completedEvents: events.filter(e => new Date(e.event_date) <= new Date()).length,
          totalBookings: bookings.length
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchRecentEvents = async () => {
    try {
      const response = await fetch('https://sport-zone-survar.vercel.app/events');
      const events = await response.json();
      setRecentEvents(events.slice(0, 3));
    } catch (error) {
      console.error('Error fetching recent events:', error);
    }
  };

  const fetchUpcomingBookings = async () => {
    try {
      if (user?.email) {
        const response = await fetch(`https://sport-zone-survar.vercel.app/myBookings?email=${user.email}`);
        const bookings = await response.json();
        setUpcomingBookings(bookings.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const statCards = [
    { title: 'Total Events', value: stats.totalEvents, icon: Calendar, color: 'orange', change: '+12%' },
    { title: 'Upcoming Events', value: stats.upcomingEvents, icon: Clock, color: 'blue', change: '+8%' },
    { title: 'Completed Events', value: stats.completedEvents, icon: Trophy, color: 'green', change: '+15%' },
    { title: 'Total Bookings', value: stats.totalBookings, icon: BookOpen, color: 'purple', change: '+5%' }
  ];

  const quickActions = [
    { title: 'Create Event', icon: Plus, path: '/createvent', color: 'orange' },
    { title: 'Browse Events', icon: Calendar, path: '/all-events', color: 'blue' },
    { title: 'My Bookings', icon: BookOpen, path: '/my-bookings', color: 'green' },
    { title: 'Manage Events', icon: Settings, path: '/manageevents', color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Welcome back, {user?.displayName || 'User'}!
              </h1>
              <p className="text-gray-600">Here's what's happening with your sports activities</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <button className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <Link 
                to="/profile"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Quick Actions */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-orange-600" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={action.title}
                    to={action.path}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`p-2 rounded-lg bg-${action.color}-100 group-hover:bg-${action.color}-200 transition-colors`}>
                      <action.icon className={`w-4 h-4 text-${action.color}-600`} />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">
                      {action.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Events */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  Recent Events
                </h2>
                <Link 
                  to="/all-events"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentEvents.map((event, index) => (
                  <div key={event._id} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <img
                      src={event.picture || "https://via.placeholder.com/60x60?text=Event"}
                      alt={event.eventName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{event.eventName}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(event.eventDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.description || 'Location TBD'}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/evendetails/${event._id}`}
                      className="px-3 py-1 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upcoming Bookings & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          
          {/* Upcoming Bookings */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  Upcoming Bookings
                </h2>
                <Link 
                  to="/my-bookings"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingBookings.length > 0 ? (
                  upcomingBookings.map((booking, index) => (
                    <div key={booking._id} className="flex items-center gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{booking.eventName}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(booking.eventDate).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Confirmed
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No upcoming bookings</p>
                    <Link 
                      to="/all-events"
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2 inline-block"
                    >
                      Browse Events
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Achievement/Progress */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-600" />
                Your Progress
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Events Attended</span>
                    <span className="text-sm text-gray-600">{stats.completedEvents}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((stats.completedEvents / 10) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Events Created</span>
                    <span className="text-sm text-gray-600">{stats.totalEvents}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((stats.totalEvents / 5) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Sports Enthusiast</h3>
                      <p className="text-sm text-gray-600">Keep participating in events!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
