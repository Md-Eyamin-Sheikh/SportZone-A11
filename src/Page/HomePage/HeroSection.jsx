import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Calendar, Users, Trophy, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Discover Amazing Sports Events",
    "Join Athletic Communities",
    "Create Memorable Experiences",
    "Compete & Achieve Greatness"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">Welcome to SportZone</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  SportZone
                </span>
              </motion.h1>
              
              {/* Animated Text */}
              <div className="h-16 flex items-center">
                <motion.p
                  key={currentText}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold text-gray-700"
                >
                  {heroTexts[currentText]}
                </motion.p>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Join thousands of athletes and sports enthusiasts. Book events, create competitions, and be part of an amazing sports community.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/all-events"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Explore Events
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
              
              <Link
                to="/createvent"
                className="group bg-white/80 backdrop-blur-sm text-orange-600 px-8 py-4 rounded-2xl font-semibold border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                Create Event
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">10K+</div>
                <div className="text-sm text-gray-600">Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Sports</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-2xl border border-orange-100"
              >
                <img
                  src="https://i.postimg.cc/25zYrgLB/soccer-players-action-professional-stadium.jpg"
                  alt="Sports Action"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Events</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">Join Community</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl transform rotate-6 scale-105 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-500"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
