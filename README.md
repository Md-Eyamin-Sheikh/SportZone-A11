# 🏆 SportZone - Athletic Events Platform

A comprehensive full-stack web application for discovering, booking, and managing athletic events. Built with modern React technologies and featuring AI assistance, user dashboard, and beautiful responsive design with consistent orange theming.

## 🌐 Live Demo

- **Frontend (Netlify):** [https://mellifluous-caramel-bd2364.netlify.app/]
- **Backend (Vercel):** [https://sport-zone-survar.vercel.app/]

## ✨ Key Features

### 🏠 Homepage & Discovery
- **Dynamic Homepage**: Beautiful landing page with animated typewriter effect
- **Event Carousel**: Smooth slider with gradient overlays
- **Live Statistics**: Animated counters showing platform metrics
- **Sport Categories**: Visual grid navigation by sport type
- **Testimonials**: User reviews with star ratings

### 🤖 AI Assistant
- **Real-time Chat**: GPT-powered AI assistant for sports queries
- **Voice Recording**: Record voice messages (3-second auto-stop)
- **Image Upload**: Upload and share images in chat
- **Smart Responses**: Context-aware responses about SportZone features
- **Fallback System**: Works offline with intelligent responses

### 📊 User Dashboard
- **Statistics Overview**: Personal event and booking metrics
- **Quick Actions**: Fast access to key features
- **Recent Activities**: Latest events and bookings
- **Progress Tracking**: Achievement system with progress bars
- **Responsive Design**: Optimized for all screen sizes

### 👤 Authentication & User Management
- **Firebase Authentication**: Secure login and registration
- **Google Sign-in**: One-click authentication
- **User Profiles**: Comprehensive profile management
- **Protected Routes**: Role-based access control

### 📅 Event Management System
- **Create Events**: Rich event creation with image uploads
- **Update/Delete**: Full CRUD operations for event organizers
- **Event Details**: Comprehensive information pages
- **Search & Filter**: Advanced filtering by name, type, location
- **View Modes**: Toggle between grid and list layouts

### 🎫 Booking & Participation
- **Secure Booking**: Duplicate prevention and confirmation
- **My Bookings**: Personal booking management
- **Cancel Bookings**: Easy cancellation with confirmations
- **Booking History**: Track all past and upcoming events

### 📱 Mobile-First Design
- **Bottom Navigation**: Mobile-optimized navigation bar
- **Responsive Layouts**: Adaptive design for all devices
- **Touch-Friendly**: Large buttons and intuitive gestures
- **Performance**: Optimized for mobile networks

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **Vite 7.1.2** - Lightning-fast build tool
- **React Router DOM 7.8.2** - Client-side routing
- **Framer Motion 12.23.12** - Smooth animations
- **Tailwind CSS 4.1.13** - Utility-first styling
- **Lucide React** - Modern icon library

### Backend
- **Node.js & Express 5.1.0** - Server framework
- **MongoDB 6.19.0** - NoSQL database
- **OpenAI API** - AI chatbot integration
- **CORS** - Cross-origin resource sharing

### Authentication & Hosting
- **Firebase 12.2.1** - Authentication service
- **Netlify** - Frontend hosting
- **Vercel** - Backend hosting
- **MongoDB Atlas** - Cloud database

## 🎨 Design System

### Color Palette
- **Primary Orange**: #F97316, #EA580C
- **Orange Variants**: #FED7AA, #FDBA74, #FB923C
- **Gradients**: Orange to amber transitions
- **Neutrals**: White, gray shades for balance

### Component Library
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gradient backgrounds with animations
- **Forms**: Orange focus states and validation
- **Navigation**: Consistent orange theming

## 🚀 Getting Started

### Prerequisites
```bash
Node.js (v18+)
npm or yarn
Firebase account
MongoDB Atlas account
OpenRouter API key (for AI features)
```

### Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd SportZone-Claind
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Frontend (.env)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend (.env)
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

4. **Start Development**
```bash
# Frontend
npm run dev

# Backend (separate terminal)
cd ../SportZone-Survar
npm install
npm start
```

## 📖 Usage Guide

### For Regular Users
1. **Explore Events**: Browse homepage and event listings
2. **AI Assistant**: Ask questions about sports and events
3. **Create Account**: Sign up with email or Google
4. **Book Events**: Reserve spots in athletic events
5. **Dashboard**: Track your activities and progress
6. **Voice & Images**: Use AI assistant with multimedia

### For Event Organizers
1. **Create Events**: Add new athletic events with details
2. **Manage Events**: Update, delete, and monitor events
3. **Track Bookings**: See who registered for events
4. **Analytics**: View event performance metrics

### AI Assistant Features
- **Sports Queries**: Ask about events, rules, tips
- **Platform Help**: Get assistance with SportZone features
- **Voice Messages**: Record and send voice notes
- **Image Sharing**: Upload images for context
- **Smart Responses**: Context-aware AI conversations

## 🎯 Recent Updates

### New Features Added
- ✅ **AI Chatbot**: Real-time AI assistance with voice/image support
- ✅ **User Dashboard**: Comprehensive analytics and quick actions
- ✅ **Bottom Navigation**: Mobile-optimized navigation
- ✅ **Typewriter Animation**: Engaging homepage text effects
- ✅ **Enhanced Search**: Beautiful search interface with filters
- ✅ **Progress Tracking**: Achievement system for users

### UI/UX Improvements
- ✅ **Orange Theme**: Consistent branding throughout
- ✅ **Smooth Animations**: Framer Motion transitions
- ✅ **Responsive Design**: Perfect on all screen sizes
- ✅ **Loading States**: Beautiful loading indicators
- ✅ **Error Handling**: Graceful error management

### Performance Optimizations
- ✅ **Code Splitting**: Optimized bundle sizes
- ✅ **Image Optimization**: Lazy loading and compression
- ✅ **API Efficiency**: Reduced server requests
- ✅ **Mobile Performance**: Enhanced mobile experience

## 🔧 API Endpoints

### Events
- `GET /events` - Fetch all events
- `GET /events/:id` - Get specific event
- `POST /events` - Create new event
- `PUT /events/:id` - Update event
- `DELETE /events/:id` - Delete event

### Bookings
- `GET /myBookings?email=` - User bookings
- `POST /myBookings` - Create booking
- `DELETE /myBookings/:id` - Cancel booking

### AI Assistant
- `POST /api/chatbot` - Send message to AI

## 🏗️ Project Structure

```
SportZone/
├── SportZone-Claind/          # Frontend React App
│   ├── src/
│   │   ├── Page/              # Page components
│   │   │   ├── HomePage/      # Landing page
│   │   │   ├── EventManagement/ # Event CRUD
│   │   │   ├── UserProfile/   # Profile & Dashboard
│   │   │   └── Ai-Assistant/  # AI Chat interface
│   │   ├── Component/         # Reusable components
│   │   ├── providers/         # Context providers
│   │   └── Firbas/           # Firebase config
└── SportZone-Survar/          # Backend Express Server
    ├── index.js              # Main server file
    ├── Chatbot.js           # AI integration
    └── .env                 # Environment variables
```

## 👨💻 Developer

**MD Eyamin Sheikh**
- GitHub: [https://github.com/Md-Eyamin-Sheikh]
- Email: [mdeyaminshekh0@gmail.com]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Firebase for authentication services
- MongoDB for database solutions
- OpenRouter for AI integration
- Tailwind CSS for styling framework
- Framer Motion for animations

---

⭐ **If you found this project helpful, please give it a star!**

🚀 **Ready to explore athletic events? Visit SportZone today!**
