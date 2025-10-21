import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Target } from 'lucide-react';

export default function StatsCounter() {
  const [stats, setStats] = useState({
    totalEvents: 0,
    activeUsers: 0,
    sportsCategories: 0,
    successRate: 0
  });

  useEffect(() => {
    // Fetch real stats from API
    fetch("https://sport-zone-survar.vercel.app/events")
      .then(res => res.json())
      .then(data => {
        const categories = [...new Set(data.map(event => event.eventType))];
        setStats({
          totalEvents: data.length,
          activeUsers: 1250, // Could be fetched from users API
          sportsCategories: categories.length,
          successRate: 98
        });
      });
  }, []);

  const statsData = [
    { icon: Calendar, label: 'Total Events', value: stats.totalEvents, suffix: '+' },
    { icon: Users, label: 'Active Users', value: stats.activeUsers, suffix: '+' },
    { icon: Trophy, label: 'Sports Categories', value: stats.sportsCategories, suffix: '' },
    { icon: Target, label: 'Success Rate', value: stats.successRate, suffix: '%' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">SportZone by Numbers</h2>
          <p className="text-orange-100 text-lg">Join our growing community of athletes</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-4xl font-bold mb-2"
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <p className="text-orange-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
