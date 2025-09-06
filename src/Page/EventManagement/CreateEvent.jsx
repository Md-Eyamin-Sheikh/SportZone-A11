import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// Example: Replace with your real Auth Context
import { AuthContext } from "../../providers/AuthProvider";

export default function CreateEvent() {
  const { user } = useContext(AuthContext); // logged-in user
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "Swimming",
    eventDate: "",
    description: "",
    picture: "",
    creatorEmail: "",
    creatorName: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      creatorEmail: user?.email || "",
      creatorName: user?.displayName || "",
    }));
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate required fields
    if (!formData.eventName || !formData.eventDate || !formData.picture) {
      Swal.fire("Error", "Please fill in all required fields!", "error");
      return;
    }

    try {
      // API call placeholder (replace URL with your backend endpoint)
      const res = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire("Success", "Event created successfully!", "success");
        setFormData({
          eventName: "",
          eventType: "Swimming",
          eventDate: "",
          description: "",
          picture: "",
          creatorEmail: user?.email || "",
          creatorName: user?.displayName || "",
        });
      } else {
        Swal.fire("Error", "Failed to create event", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-indigo-700 mb-8"
        >
          Create a New Event
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">
              Event Name
            </label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full px-4 py-3 text-gray-950 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">
              Event Type
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-950 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            >
              <option>Swimming</option>
              <option>Sprinting</option>
              <option>Long Jump</option>
              <option>High Jump</option>
              <option>Hurdle Race</option>
              <option>Cycling</option>
              <option>Tennis</option>
              <option>Cricket</option>
              <option>Football</option>
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-950 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              className="w-full text-gray-950 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              rows="4"
            ></textarea>
          </div>

          {/* Creator Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-900 font-medium mb-1">
                Creator Email
              </label>
              <input
                type="email"
                name="creatorEmail"
                value={formData.creatorEmail}
                readOnly
                className="w-full px-4 text-gray-950 py-3 rounded-xl border border-gray-300 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-1">
                Creator Name
              </label>
              <input
                type="text"
                name="creatorName"
                value={formData.creatorName}
                readOnly
                className="w-full px-4 py-3 text-gray-950 rounded-xl border border-gray-300 bg-gray-100"
              />
            </div>
          </div>

          {/* Event Picture */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">
              Event Picture URL
            </label>
            <input
              type="url"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 text-gray-950 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
          >
            Create Event
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
