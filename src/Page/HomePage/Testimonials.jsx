/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import feedbackAnim from "../../Loti-animesun/Testimonials.json";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marathon Runner",
    feedback: "SportZone made it incredibly easy to find and register for local running events. The platform is user-friendly and reliable!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Basketball Coach",
    feedback: "As an event organizer, SportZone has streamlined our registration process. We've seen a 40% increase in participation!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Swimming Enthusiast",
    feedback: "The variety of events and easy booking system keeps me coming back. I've discovered so many new sports through SportZone!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
            What Athletes Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied athletes who trust SportZone for their event needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />
              
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-orange-200"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-orange-600 font-medium text-sm">{item.role}</p>
                  <div className="flex mt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{item.feedback}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72">
            <Lottie animationData={feedbackAnim} loop={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
