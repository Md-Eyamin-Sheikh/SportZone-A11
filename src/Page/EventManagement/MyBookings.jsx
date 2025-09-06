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
    fetch(`http://localhost:5000/myBookings/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          setBookings(bookings.filter(b => b._id !== id));
          alert("Booking cancelled successfully ✅");
        }
      });
  };

  return (
    <div className="p-6">
      <motion.h1 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Bookings
      </motion.h1>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center">
          <Lottie animationData={emptyAnimation} className="w-72 h-72" />
          <p className="text-gray-500 mt-4 text-lg">No Bookings Found</p>
        </div>
      ) : (
        <motion.table 
          className="w-full border-collapse shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <th className="py-3 px-4">Event Name</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <motion.tr 
                key={b._id} 
                className="text-center hover:bg-gray-50 transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <td className="py-3 px-4">{b.event_name}</td>
                <td className="py-3 px-4">{b.event_date}</td>
                <td className="py-3 px-4">{b.location}</td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => handleDelete(b._id)} 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow"
                  >
                    Cancel
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      )}
    </div>
  );
}
