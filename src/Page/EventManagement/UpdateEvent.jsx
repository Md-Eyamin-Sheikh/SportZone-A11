import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import updateAnimation from "../../Loti-animesun/UPDATE.json";

export default function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  // Fetch event by id
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(res => res.json())
      .then(data => setEvent(data));
  }, [id]);

  // Handle form submit
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedEvent = {
      eventName: form.eventName.value,
      eventType: form.eventType.value,
      eventDate: form.eventDate.value,
      description: form.description.value,
      picture: form.picture.value,
    };

    fetch(`http://localhost:5000/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Event updated successfully!", "success");
          navigate("/manageevents");
        }
      });
  };

  if (!event) {
    return <p className="text-center text-gray-500">Loading event details...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title Animation */}
      <motion.h1
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Update Event
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Animation side */}
        <Lottie animationData={updateAnimation} className="w-72 h-72" />

        {/* Update Form */}
        <form
          onSubmit={handleUpdate}
          className="flex-1 bg-white shadow-xl rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            name="eventName"
            defaultValue={event.eventName}
            placeholder="Event Name"
            className="w-full border rounded-lg p-3"
            required
          />
          <select
            name="eventType"
            defaultValue={event.eventType}
            className="w-full border rounded-lg p-3"
            required
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
          <input
            type="date"
            name="eventDate"
            defaultValue={event.eventDate}
            className="w-full border rounded-lg p-3"
            required
          />
          <input
            type="url"
            name="picture"
            defaultValue={event.picture}
            placeholder="Event Picture URL"
            className="w-full border rounded-lg p-3"
            required
          />
          <textarea
            name="description"
            defaultValue={event.description}
            placeholder="Description"
            className="w-full border rounded-lg p-3"
            rows="4"
            required
          ></textarea>

          {/* Submit button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Update Event
          </motion.button>
        </form>
      </div>
    </div>
  );
}
