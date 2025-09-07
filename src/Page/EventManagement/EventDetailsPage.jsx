/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

export default function EventDetailsPage() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(false);
  const [bookingCheckLoading, setBookingCheckLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`https://sport-zone-survar.vercel.app/events/${id}`);
        if (res.ok) {
          const data = await res.json();
          setEvent(data);
        } else {
          setEvent(null);
        }
      } catch (error) {
        console.error("Failed to fetch event:", error);
        setEvent(null);
      }
    };

    fetchEvent();
  }, [id]);

  // Fetch user's existing bookings and check if this event is already booked
  useEffect(() => {
    const fetchUserBookings = async () => {
      if (user?.email && event) {
        setBookingCheckLoading(true);
        try {
          const res = await fetch(`https://sport-zone-survar.vercel.app/myBookings?email=${user.email}`);
          if (res.ok) {
            const bookings = await res.json();
            setUserBookings(bookings);

            // Check if user has already booked this event
            const alreadyBooked = bookings.some(booking =>
              booking.event_name === event.eventName &&
              booking.event_date === event.eventDate
            );
            setIsAlreadyBooked(alreadyBooked);
          }
        } catch (error) {
          console.error("Failed to fetch user bookings:", error);
        } finally {
          setBookingCheckLoading(false);
        }
      } else {
        setBookingCheckLoading(false);
      }
    };

    fetchUserBookings();
  }, [user, event]);

  const handleBooking = async () => {
    if (!event || !user) return;

    // Double-check if already booked (in case of race conditions)
    if (isAlreadyBooked) {
      Swal.fire("Already Booked!", "You have already booked this event.", "info");
      return;
    }

    const bookingData = {
      event_name: event.eventName,
      event_date: event.eventDate,
      location: event.description || "Location not specified",
      userEmail: user.email,
      userName: user.displayName || user.email,
    };

    try {
      const res = await fetch("https://sport-zone-survar.vercel.app/myBookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        Swal.fire("Success!", "Your booking has been confirmed!", "success");
        setIsAlreadyBooked(true); // Update state to reflect the booking
        // Optionally refresh user bookings
        const updatedBookings = await fetch(`https://sport-zone-survar.vercel.app/myBookings?email=${user.email}`);
        if (updatedBookings.ok) {
          const bookings = await updatedBookings.json();
          setUserBookings(bookings);
        }
      } else {
        Swal.fire("Error!", "Failed to book the event.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong while booking.", "error");
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading event details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Event Image */}
        <motion.img
          src={event.picture}
          alt={event.eventName}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-72 object-cover"
        />

        {/* Event Info */}
        <div className="p-8 space-y-4">
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-blue-700"
          >
            {event.eventName}
          </motion.h2>
          <p className="text-gray-600">🏷️ Type: {event.eventType}</p>
          <p className="text-gray-600">📅 Date: {event.eventDate}</p>
          <p className="text-gray-700 leading-relaxed">📝 {event.description}</p>
          <p className="text-gray-600">👤 Created by: {event.creatorName} ({event.creatorEmail})</p>
        </div>

        {/* Participant Details */}
        <div className="px-8 pb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Participant Details</h3>
          <form className="grid gap-4">
            <input
              type="text"
              defaultValue={user?.displayName || user?.email || ""}
              placeholder="Your Name"
              className="w-full px-4 text-gray-900 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              readOnly
            />
            <input
              type="email"
              defaultValue={user?.email || ""}
              placeholder="Your Email"
              className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              readOnly
            />
          </form>

          {/* Book Now Button or Already Booked Message */}
          {bookingCheckLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 w-full bg-gray-100 rounded-xl p-4 text-center"
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                <span className="text-gray-700 font-medium">Checking booking status...</span>
              </div>
            </motion.div>
          ) : isAlreadyBooked ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 w-full bg-green-100 border-2 border-green-300 rounded-xl p-4 text-center"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-green-800 font-semibold text-lg">Already Booked</span>
              </div>
              <p className="text-green-700 mt-2 text-sm">You have already booked this event. Check your bookings for details.</p>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Book Now
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
