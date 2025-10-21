/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import sportsAnim from "../../Loti-animesun/Sport.json";
import { useEffect, useState } from "react";

export default function PopularSports() {
  const [popularEvents, setPopularEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});

  useEffect(() => {
    const fetchPopularEvents = async () => {
      try {
        const response = await fetch('https://sport-zone-survar.vercel.app/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const events = await response.json();

        // Get the first 6 events as popular events
        const popular = events.slice(0, 6);
        setPopularEvents(popular);

        // Initialize image loading states
        const loadingStates = {};
        popular.forEach(event => {
          loadingStates[event._id] = true;
        });
        setImageLoading(loadingStates);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load popular events');
        setLoading(false);
      }
    };

    fetchPopularEvents();
  }, []);

  const handleImageError = (eventId) => {
    setImageErrors(prev => ({
      ...prev,
      [eventId]: true
    }));
    setImageLoading(prev => ({
      ...prev,
      [eventId]: false
    }));
  };

  const handleFallbackImageError = (eventId) => {
    // If even the fallback fails, just hide the loading state
    setImageLoading(prev => ({
      ...prev,
      [eventId]: false
    }));
  };

  const handleImageLoad = (eventId) => {
    setImageLoading(prev => ({
      ...prev,
      [eventId]: false
    }));
  };
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
      >
        Popular Events
      </motion.h2>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-600 text-lg">Loading popular events...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-red-600 text-lg">{error}</div>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {popularEvents.map((event, idx) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  {imageLoading[event._id] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Loading...</div>
                    </div>
                  )}
                  <img
                    src={imageErrors[event._id]
                      ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23F3F4F6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='18' fill='%239CA3AF' text-anchor='middle' dy='.3em'%3EEvent Image%3C/text%3E%3C/svg%3E"
                      : (event.picture || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23F3F4F6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='18' fill='%239CA3AF' text-anchor='middle' dy='.3em'%3EEvent Image%3C/text%3E%3C/svg%3E")}
                    alt={event.eventName}
                    className="w-full h-56 object-cover"
                    onError={imageErrors[event._id] ? () => handleFallbackImageError(event._id) : () => handleImageError(event._id)}
                    onLoad={() => handleImageLoad(event._id)}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0  flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg mb-2">
                      {event.eventName}
                    </h3>
                    <p className="text-white text-sm opacity-90">
                      {event.eventType}
                    </p>
                    <p className="text-white text-xs opacity-75 mt-1">
                      {new Date(event.eventDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Animation */}
      <div className="flex justify-center mt-12">
        <Lottie animationData={sportsAnim} className="w-80 h-80" />
      </div>
    </section>
  );
}
