/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin, Filter, Grid, List } from "lucide-react";

export default function SeeAllEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Fetch all events from backend
  useEffect(() => {
    fetch("https://sport-zone-survar.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // Filtered events based on search
  const filteredEvents = events.filter((event) =>
    event.eventName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 py-14 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-4">
            All Events
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing sports events happening around you. Find your passion and join the community!
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-6 mb-8"
        >
          <div className="flex  md:flex-row gap-4 items-center">
            
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-orange-400" />
              </div>
              <input
                type="text"
                placeholder="Search events by name or location..."
                className="w-full pl-12 pr-4 py-4 text-gray-800 bg-orange-50/50 rounded-2xl border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all duration-300 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-orange-400 hover:text-orange-600 transition-colors"
                  >
                    ✕
                  </button>
                </motion.div>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex bg-orange-100 rounded-2xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-orange-600 hover:bg-orange-200"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-orange-600 hover:bg-orange-200"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-center"
          >
            <span className="text-orange-600 font-medium">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </span>
          </motion.div>
        </motion.div>

        {/* Events Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={viewMode === "grid" 
            ? "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : "space-y-4"
          }
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, idx) => (
              <motion.div
                key={event._id}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden border border-orange-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.picture || "https://via.placeholder.com/400x250?text=Event+Image"}
                    alt={event.eventName}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {event.eventType}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {event.eventName}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500 mr-3" />
                      <span className="text-sm">
                        {new Date(event.eventDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-500 mr-3" />
                      <span className="text-sm line-clamp-1">
                        {event.description || "Location not specified"}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/evendetails/${event._id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View Details
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-12 h-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500 max-w-md">
                Try adjusting your search terms or browse all available events.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
