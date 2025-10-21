import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SportCategoriesGrid() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://sport-zone-survar.vercel.app/events")
      .then(res => res.json())
      .then(data => {
        const categoryCount = {};
        data.forEach(event => {
          categoryCount[event.eventType] = (categoryCount[event.eventType] || 0) + 1;
        });
        
        const categoryData = Object.entries(categoryCount).map(([type, count]) => ({
          name: type,
          count,
          icon: getCategoryIcon(type),
          color: getCategoryColor(type)
        }));
        
        setCategories(categoryData);
      });
  }, []);

  const getCategoryIcon = (type) => {
    const icons = {
      'Swimming': '🏊‍♂️',
      'Football': '⚽',
      'Basketball': '🏀',
      'Tennis': '🎾',
      'Cricket': '🏏',
      'Running': '🏃‍♂️'
    };
    return icons[type] || '🏆';
  };

  const getCategoryColor = (type) => {
    const colors = {
      'Swimming': 'from-blue-400 to-blue-600',
      'Football': 'from-green-400 to-green-600',
      'Basketball': 'from-orange-400 to-orange-600',
      'Tennis': 'from-yellow-400 to-yellow-600',
      'Cricket': 'from-red-400 to-red-600',
      'Running': 'from-purple-400 to-purple-600'
    };
    return colors[type] || 'from-gray-400 to-gray-600';
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
            Explore Sports Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find events in your favorite sports and discover new activities
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Link to={`/events?category=${category.name}`}>
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white text-center shadow-lg group-hover:shadow-xl transition-all`}>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} events</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
