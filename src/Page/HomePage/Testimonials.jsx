/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import feedbackAnim from "../../Loti-animesun/Testimonials.json"; // তোমার feedback animation json file path

const testimonials = [
  {
    id: 1,
    name: "David Miller",
    role: "Marathon Runner",
    feedback:
      "AthleticHub made it super easy to discover and book local events. I love how smooth the booking process is!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Sophia Johnson",
    role: "Fitness Enthusiast",
    feedback:
      "I’ve participated in 3 events already! The platform is intuitive, and the reminders are really helpful.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "James Lee",
    role: "Cyclist",
    feedback:
      "Booking through AthleticHub saved me so much time. I could easily track my bookings in one place.",
    image: "https://i.pravatar.cc/150?img=33",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
      >
        What Athletes Say
      </motion.h2>

      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* User Image */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-600 leading-relaxed">“{item.feedback}”</p>
          </motion.div>
        ))}
      </div>

      {/* Animation at Bottom */}
      <div className="flex justify-center mt-12">
        <Lottie animationData={feedbackAnim} className="w-72 h-72" />
      </div>
    </section>
  );
}
