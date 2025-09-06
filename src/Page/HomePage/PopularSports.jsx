import { motion } from "framer-motion";
import Lottie from "lottie-react";
import sportsAnim from "../../Loti-animesun/Sport.json"; // তোমার লোটি ফাইল

const sportsCategories = [
  {
    id: 1,
    name: "Football",
    image: "https://i.postimg.cc/25zYrgLB/soccer-players-action-professional-stadium.jpg",
  },
  {
    id: 2,
    name: "Running",
    image: "https://i.postimg.cc/g24zXYWK/full-shot-woman-running-with-wavy-texts.jpg",
  },
  {
    id: 3,
    name: "Cycling",
    image: "https://i.postimg.cc/RCnZs57M/athlete-starting-line-stadium.jpg",
  },
  {
    id: 4,
    name: "Swimming",
    image: "https://i.postimg.cc/65nT3JqH/sportsman-start.jpg",
  },
  {
    id: 5,
    name: "Basketball",
    image: "https://i.postimg.cc/7ZRRQcMk/competition-sophisticated-hispanic-happy-intelligence.jpg",
  },
  {
    id: 6,
    name: "Tennis",
    image: "https://i.postimg.cc/c4g4zqfx/steve-hillman-1e-Mdn8d-CPQ4-unsplash.jpg",
  },
];

export default function PopularSports() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
      >
        Popular Sports Categories
      </motion.h2>

      {/* Sports Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sportsCategories.map((sport, idx) => (
          <motion.div
            key={sport.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                {sport.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Animation */}
      <div className="flex justify-center mt-12">
        <Lottie animationData={sportsAnim} className="w-80 h-80" />
      </div>
    </section>
  );
}
