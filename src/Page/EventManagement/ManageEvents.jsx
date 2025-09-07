/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import emptyAnimation from "../../Loti-animesun/Events hand shaking.json";

export default function ManageEvents() {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  // Fetch events created by logged-in user
  useEffect(() => {
    if (user?.email) {
      fetch(`https://sport-zone-survar.vercel.app/manageEvents?email=${user.email}`)
        .then(res => res.json())
        .then(data => setEvents(data));
    }
  }, [user]);

  // Delete event
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sport-zone-survar.vercel.app/manageEvents/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setEvents(events.filter(ev => ev._id !== id));
              Swal.fire("Deleted!", "Your event has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <motion.h1
        className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Manage My Events
      </motion.h1>

      {events.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <Lottie animationData={emptyAnimation} className="w-48 h-48 sm:w-72 sm:h-72" />
          <p className="text-gray-500 mt-4 text-base sm:text-lg text-center">No Events Created</p>
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
                  <tr className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Event Name</th>
                    <th className="py-4 px-6 text-left font-semibold">Date</th>
                    <th className="py-4 px-6 text-left font-semibold">Location</th>
                    <th className="py-4 px-6 text-center font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(ev => (
                    <motion.tr
                      key={ev._id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">{ev.event_name}</td>
                      <td className="py-4 px-6 text-gray-600">{ev.event_date}</td>
                      <td className="py-4 px-6 text-gray-600">{ev.location}</td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center gap-3">
                          {/* Update Button */}
                          <Link to={`/update-event/${ev._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                              Update
                            </button>
                          </Link>

                          {/* Delete Button */}
                          <button
                            onClick={() => handleDelete(ev._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View - Hidden on desktop */}
          <div className="md:hidden space-y-4">
            {events.map(ev => (
              <motion.div
                key={ev._id}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{ev.event_name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">📅</span>
                        {ev.event_date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">📍</span>
                        {ev.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                  <Link to={`/update-event/${ev._id}`} className="flex-1">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm font-medium">
                      Update Event
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(ev._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm font-medium"
                  >
                    Delete Event
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
