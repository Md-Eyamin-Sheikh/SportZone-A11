import { Home, Calendar, Plus, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BottomNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'events', label: 'Events', icon: Calendar, path: '/all-events' },
    { id: 'create', label: 'Create', icon: Plus, path: '/createvent' },
    { id: 'ai-assistant', label: 'AI Help', icon: Sparkles, highlight: true, path: '/ai-assistant' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => onTabChange(item.id)}
              className={`relative flex flex-col items-center justify-center py-2 px-3 min-h-[64px] transition-all duration-300 ${
                item.highlight && !isActive
                  ? 'text-orange-600'
                  : isActive 
                  ? 'text-orange-600' 
                  : 'text-gray-600 hover:text-gray-900'
              } ${isActive ? 'scale-110' : 'scale-100'}`}
              aria-label={item.label}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
              )}
              
              {/* AI Badge/Glow effect */}
              {item.highlight && !isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent rounded-xl" />
              )}
              
              <div className={`relative ${isActive && item.highlight ? 'animate-pulse' : ''}`}>
                <IconComponent className={`w-6 h-6 mb-1 transition-transform ${isActive ? 'scale-110' : ''} ${isActive ? 'fill-current' : ''}`} />
                {item.highlight && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                )}
              </div>
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;