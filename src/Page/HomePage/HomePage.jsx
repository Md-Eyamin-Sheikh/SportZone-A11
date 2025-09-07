/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularSports from "./PopularSports";
import Testimonials from "./Testimonials";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
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

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  const slideImages = [
    "https://i.postimg.cc/c4g4zqfx/steve-hillman-1e-Mdn8d-CPQ4-unsplash.jpg",
    "https://i.postimg.cc/25zYrgLB/soccer-players-action-professional-stadium.jpg",
    "https://i.postimg.cc/65nT3JqH/sportsman-start.jpg",
    "https://i.postimg.cc/RCnZs57M/athlete-starting-line-stadium.jpg",
    "https://i.postimg.cc/g24zXYWK/full-shot-woman-running-with-wavy-texts.jpg",
    "https://i.postimg.cc/7ZRRQcMk/competition-sophisticated-hispanic-happy-intelligence.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner / Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-h-[80vh] overflow-hidden"
      >
        <Slider {...settings}>
          {slideImages.map((src, i) => (
            <div key={i} className="relative">
              <img src={src} alt={`slide-${i}`} className="w-full h-[30vh] sm:h-[60vh] md:h-[80vh] object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.h2
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-4xl md:text-6xl font-bold text-center"
                >
                  Discover & Book Athletic Events
                </motion.h2>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Featured Events
        </motion.h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 6).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={event.picture || "https://via.placeholder.com/400x250?text=Event+Image"}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/events"
            className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            See All Events
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials/>

      {/* PopularSports  */}
      <PopularSports/>
      
    </div>
  );
}
