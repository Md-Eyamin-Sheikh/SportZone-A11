import React from 'react';
import { 
  Trophy, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Calendar,
  Users,
  Award,
  ChevronRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SportZone</h3>
                <p className="text-sm text-orange-200">Athletic Events Platform</p>
              </div>
            </div>
            <p className="text-orange-100 text-sm leading-relaxed">
              Connecting athletes and sports fans with local athletic events. 
              Your gateway to discovering, booking, and participating in amazing sports competitions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sky-500 hover:bg-sky-600 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <ChevronRight className="h-5 w-5 text-orange-400 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                  <Calendar className="h-4 w-4 mr-2 group-hover:text-orange-300" />
                  Browse Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                  <Users className="h-4 w-4 mr-2 group-hover:text-orange-400" />
                  Join Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                  <Award className="h-4 w-4 mr-2 group-hover:text-orange-400" />
                  Become Organizer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Event Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Blog & News
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <ChevronRight className="h-5 w-5 text-orange-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Booking Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <ChevronRight className="h-5 w-5 text-orange-400 mr-2" />
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@sportzone.com" className="text-white hover:text-orange-400 transition-colors">
                    info@sportzone.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-orange-400 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">
                    123 Sports Avenue<br />
                    Athletic City, AC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Get the latest events, tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>© {currentYear} SportZone. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for athletes worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;