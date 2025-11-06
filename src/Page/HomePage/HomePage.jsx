/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopularSports from "./PopularSports";
import Testimonials from "./Testimonials";
import StatsCounter from "./StatsCounter";
import SportCategoriesGrid from "./SportCategoriesGrid";
import HeroSection from "./HeroSection";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://sport-zone-survar.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          id: event._id,
          name: event.eventName,
          date: event.eventDate,
          location: event.description || "Location not specified",
          picture: event.picture,
          eventType: event.eventType,
        }));
        setEvents(formattedEvents);
      })
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  return (
    <div className="min-h-screen">
      {/* New Hero Section */}
      <HeroSection />

      {/* Featured Events */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
              Featured Events
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Discover upcoming sports events, tournaments, and competitions happening around you. 
              <span className="text-orange-600 font-medium"> Stay updated and join the excitement!</span>
            </p>
          </motion.div>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 6).map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
              >
                <div className="relative">
                  <img
                    src={event.picture || "https://via.placeholder.com/400x250?text=Event+Image"}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.eventType}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-gray-600 flex items-center">
                      <span className="text-blue-500 mr-2">📅</span>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="text-green-500 mr-2">📍</span>
                      {event.location}
                    </p>
                  </div>
                  <Link
                    to={`/evendetails/${event.id}`}
                    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/all-events"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              See All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
              Quick Actions
            </h2>
            <p className="text-gray-600 text-lg">Get started with SportZone in just a few clicks</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Browse Events", desc: "Find exciting sports events near you", icon: "🔍", link: "/all-events", color: "from-blue-500 to-blue-600" },
              { title: "Create Event", desc: "Organize your own sports event", icon: "➕", link: "/createvent", color: "from-green-500 to-green-600" },
              { title: "My Dashboard", desc: "Manage your bookings and events", icon: "📊", link: "/dashboard", color: "from-purple-500 to-purple-600" }
            ].map((action, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{action.title}</h3>
                <p className="text-gray-600 mb-6">{action.desc}</p>
                <Link
                  to={action.link}
                  className={`inline-block bg-gradient-to-r ${action.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                >
                  Get Started →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Categories Grid */}
      <SportCategoriesGrid />

      {/* Event Categories by Type */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
              Popular Event Categories
            </h2>
            <p className="text-gray-600 text-lg">Explore events by your favorite sports</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Football", icon: "⚽", count: "45+ Events", color: "bg-green-100 text-green-700" },
              { name: "Basketball", icon: "🏀", count: "32+ Events", color: "bg-orange-100 text-orange-700" },
              { name: "Tennis", icon: "🎾", count: "28+ Events", color: "bg-yellow-100 text-yellow-700" },
              { name: "Swimming", icon: "🏊", count: "22+ Events", color: "bg-blue-100 text-blue-700" },
              { name: "Running", icon: "🏃", count: "38+ Events", color: "bg-red-100 text-red-700" },
              { name: "Cricket", icon: "🏏", count: "25+ Events", color: "bg-purple-100 text-purple-700" }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`${category.color} rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-sm opacity-80">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials/>

      {/* PopularSports  */}
      <PopularSports/>

      {/* Statistics Counter */}
      <StatsCounter />

      {/* Newsletter & Final CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join SportZone?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Connect with athletes, discover events, and be part of the sports community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-sm">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-lg mb-2">Find Events</h3>
                <p className="text-orange-100 text-sm">Discover sports events that match your interests</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-sm">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-bold text-lg mb-2">Connect</h3>
                <p className="text-orange-100 text-sm">Meet like-minded athletes and sports enthusiasts</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-sm">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="font-bold text-lg mb-2">Compete</h3>
                <p className="text-orange-100 text-sm">Participate in competitions and achieve your goals</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register-page"
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join SportZone Today
              </Link>
              <Link
                to="/ai-assistant"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Try AI Assistant
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
