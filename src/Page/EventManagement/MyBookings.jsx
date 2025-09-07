/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emptyAnimation from "../../Loti-animesun/Booking Calender.json";

export default function MyBookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // Fetch bookings by user email
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myBookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [user]);

  // Delete booking
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      fetch(`http://localhost:5000/myBookings/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            setBookings(bookings.filter(b => b._id !== id));
            // You can replace this with a toast notification library later
            alert("Booking cancelled successfully ✅");
          } else {
            alert("Failed to cancel booking. Please try again.");
          }
        })
        .catch(error => {
          console.error("Error cancelling booking:", error);
          alert("An error occurred while cancelling the booking.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <motion.h1
        className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Bookings
      </motion.h1>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <Lottie animationData={emptyAnimation} className="w-48 h-48 sm:w-72 sm:h-72" />
          <p className="text-gray-500 mt-4 text-base sm:text-lg text-center">No Bookings Found</p>
        </div>
      ) : (
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Desktop Table View - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Event Name</th>
                    <th className="py-4 px-6 text-left font-semibold">Date</th>
                    <th className="py-4 px-6 text-left font-semibold">Location</th>
                    <th className="py-4 px-6 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <motion.tr
                      key={b._id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">{b.event_name}</td>
                      <td className="py-4 px-6 text-gray-600">{b.event_date}</td>
                      <td className="py-4 px-6 text-gray-600">{b.location}</td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleDelete(b._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                          Cancel
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View - Hidden on desktop */}
          <div className="md:hidden space-y-4">
            {bookings.map(b => (
              <motion.div
                key={b._id}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{b.event_name}</h3>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">📅</span>
                        {b.event_date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">📍</span>
                        {b.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm font-medium"
                  >
                    Cancel Booking
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
