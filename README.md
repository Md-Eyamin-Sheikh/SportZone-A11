# 🎯 SportZone - Athletic Events Platform

A comprehensive web application for discovering, booking, and managing athletic events. Built with modern React technologies and featuring a beautiful, responsive design with consistent orange theming.

## 🌐 Live Demo

- **Frontend (Netlify):** [https://mellifluous-caramel-bd2364.netlify.app/]

## ✨ Features

### 🏠 Core Features
- **Dynamic Homepage**: Beautiful landing page with event carousel and testimonials
- **Advanced Search**: Filter events by name, type, and category with real-time results
- **Event Discovery**: Browse and search through available athletic events
- **Real-time Data**: Events fetched from MongoDB database
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### 👤 User Authentication
- **Firebase Authentication**: Secure login and registration
- **Google Sign-in**: Quick authentication with Google accounts
- **Protected Routes**: Authenticated access to user-specific features

### 📅 Event Management
- **Create Events**: Event organizers can create new athletic events
- **Update Events**: Modify event details and information
- **Delete Events**: Remove events with confirmation dialogs
- **Event Details**: Comprehensive event information pages
- **Favorites System**: Save and manage favorite events

### 🎫 Booking System
- **Book Events**: Secure booking with duplicate prevention
- **My Bookings**: View all personal bookings with layout toggle
- **Cancel Bookings**: Easy cancellation with confirmation
- **Booking History**: Track all past and upcoming bookings

### 🎨 User Experience
- **Layout Toggle**: Switch between card and table views
- **Smooth Animations**: Framer Motion powered transitions
- **Loading States**: Beautiful loading indicators and skeletons
- **Error Handling**: Comprehensive error messages and fallbacks
- **Image Optimization**: Lazy loading with error fallbacks
- **Orange Theme**: Consistent orange color scheme throughout

### 📱 Mobile-First Design
- **Responsive Navigation**: Mobile-optimized navbar with hamburger menu
- **Touch-Friendly**: Large buttons and touch targets
- **Adaptive Layouts**: Different layouts for different screen sizes
- **Performance**: Optimized for mobile networks

### 🆕 New Features Added
- **Statistics Counter**: Live platform statistics with animations
- **Upcoming Events Ticker**: Scrolling banner with countdown timers
- **Sport Categories Grid**: Visual navigation by sport type
- **Enhanced Testimonials**: Star ratings and professional profiles
- **About Page**: Comprehensive platform information

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and development server
- **React Router DOM 7.8.2** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library for React
- **Lucide React 0.542.0** - Beautiful icon library
- **React Icons 5.5.0** - Popular icon packs

### Backend & Database
- **Node.js & Express** - Backend server
- **MongoDB** - NoSQL database for events and bookings
- **Firebase 12.2.1** - Authentication and hosting

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#F97316, #EA580C)
- **Secondary**: Orange variants (#FED7AA, #FDBA74)
- **Accent**: White, Gray shades
- **Success**: Green variants
- **Error**: Red variants

### Navigation Structure
- **Logged-out users**: Home, All Events, About (3 routes)
- **Logged-in users**: Home, All Events, About, Create Event, My Bookings, Manage Events, Favorites (7 routes)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- MongoDB database

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd SportZone-Claind
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env file with Firebase config
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ... other Firebase config
```

4. Start development server
```bash
npm run dev
```

## 📖 Usage

### For Users
1. **Browse Events**: Visit homepage to see featured events and statistics
2. **Search Events**: Use advanced search with filters
3. **Sign Up/Login**: Create account or sign in with Google
4. **Book Events**: Click on events to view details and book
5. **Manage Bookings**: View and cancel bookings in "My Bookings"
6. **Explore Categories**: Browse events by sport type

### For Event Organizers
1. **Create Events**: Use "Create Event" to add new athletic events
2. **Manage Events**: Update or delete events in "Manage Events"
3. **Track Bookings**: Monitor who has booked your events

## 🎯 Key Improvements Made

### UI/UX Enhancements
- ✅ Fixed navbar with full-width orange gradient background
- ✅ Consistent orange theming across all components
- ✅ Enhanced typography with gradient text effects
- ✅ Improved animations and micro-interactions
- ✅ Better responsive design for all screen sizes

### New Features
- ✅ Advanced search and filtering system
- ✅ Live statistics counter with animations
- ✅ Upcoming events ticker with countdown
- ✅ Sport categories grid for better navigation
- ✅ Enhanced testimonials with ratings
- ✅ Favorites system for users
- ✅ About page with platform information

### Performance Optimizations
- ✅ Optimized component loading
- ✅ Better error handling
- ✅ Improved mobile performance
- ✅ Enhanced accessibility

## 👨‍💻 Developer

**MD Eyamin Sheikh**
- GitHub: https://github.com/01775012014

## 📄 License

This project is licensed under the MIT License.

---

⭐ **If you found this project helpful, please give it a star!**
