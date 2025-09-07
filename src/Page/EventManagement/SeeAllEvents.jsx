/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SeeAllEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    <section className="max-w-7xl mx-auto bg-amber-50 px-6 py-12">
      {/* Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-10"
      >
        All Events
      </motion.h2>

      {/* Search Box */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full md:w-1/2 px-4 py-3 text-gray-950 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <motion.div
              key={event._id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={
                    event.picture ||
                    "https://via.placeholder.com/400x250?text=Event+Image"
                  }
                  alt={event.eventName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.eventType}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.eventName}
                </h3>
                <div className="space-y-1 mb-4">
                  <p className="text-gray-600 flex items-center">
                    <span className="text-blue-500 mr-2">📅</span>
                    {new Date(event.eventDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">📍</span>
                    {event.description || "Location not specified"}
                  </p>
                </div>

                <Link
                  to={`/evendetails/${event._id}`}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500 text-lg">
            No events found ❌
          </p>
        )}
      </div>
    </section>
  );
}
