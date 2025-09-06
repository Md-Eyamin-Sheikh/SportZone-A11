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
      fetch(`http://localhost:5000/manageEvents?email=${user.email}`)
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
        fetch(`http://localhost:5000/manageEvents/${id}`, { method: "DELETE" })
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
    <div className="p-6">
      <motion.h1 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Manage My Events
      </motion.h1>

      {events.length === 0 ? (
        <div className="flex flex-col items-center">
          <Lottie animationData={emptyAnimation} className="w-72 h-72" />
          <p className="text-gray-500 mt-4 text-lg">No Events Created</p>
        </div>
      ) : (
        <motion.table 
          className="w-full border-collapse shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <thead>
            <tr className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
              <th className="py-3 px-4">Event Name</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(ev => (
              <motion.tr 
                key={ev._id} 
                className="text-center hover:bg-gray-50 transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <td className="py-3 px-4">{ev.event_name}</td>
                <td className="py-3 px-4">{ev.event_date}</td>
                <td className="py-3 px-4">{ev.location}</td>
                <td className="py-3 px-4 flex justify-center gap-3">
                  {/* Update Button */}
                  <Link to={`/updateEvent/${ev._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg shadow">
                      Update
                    </button>
                  </Link>
                  
                  {/* Delete Button */}
                  <button 
                    onClick={() => handleDelete(ev._id)} 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow"
                  >
                    Delete
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
