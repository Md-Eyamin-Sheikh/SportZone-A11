import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About SportZone</h1>
          <p className="text-xl text-gray-600">Your premier destination for athletic events</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Trophy className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">To connect athletes and sports enthusiasts through a comprehensive platform for discovering and participating in athletic events.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Join thousands of athletes who trust SportZone for their event management and booking needs.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-md text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose SportZone?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h4 className="font-semibold">Easy Booking</h4>
              <p className="text-sm text-gray-600">Simple and secure event booking system</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h4 className="font-semibold">Quality Events</h4>
              <p className="text-sm text-gray-600">Curated selection of premium athletic events</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h4 className="font-semibold">Community</h4>
              <p className="text-sm text-gray-600">Connect with fellow athletes and organizers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
