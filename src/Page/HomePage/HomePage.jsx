import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          location: event.description || "Location not specified", // Assuming location is in description or placeholder
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
              <img src={src} alt={`slide-${i}`} className="w-full h-[80vh] object-cover" />
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
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{event.name}</h3>
              <p className="text-gray-600">📅 {event.date}</p>
              <p className="text-gray-600">📍 {event.location}</p>
              <div className="mt-4 flex justify-between">
                <Link
                  to= {`/evendetails/${event.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
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
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            What Athletes Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Amazing platform!", "Easy booking process!", "Loved the events!"].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <p className="text-gray-600 italic">“{msg}”</p>
                <h4 className="mt-4 font-semibold text-blue-600">Athlete {i + 1}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sports */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Popular Sports
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Football", "Cricket", "Running", "Swimming"].map((sport, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-blue-700">{sport}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
