import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Loader2, Mic, Image, X, Clock, Calendar, Trophy, Users, MapPin, Search } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Welcome to SportZone AI Assistant! I can help you with sports events, bookings, and general sports information. How can I assist you today?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickActions = [
    { icon: Calendar, label: 'Find Events', query: 'Show me upcoming sports events' },
    { icon: Trophy, label: 'Popular Sports', query: 'What are the most popular sports?' },
    { icon: Users, label: 'Join Events', query: 'How can I join a sports event?' },
    { icon: MapPin, label: 'Event Locations', query: 'Where are events happening?' },
    { icon: Search, label: 'Search Help', query: 'How to search for specific events?' },
    { icon: Sparkles, label: 'Event Tips', query: 'Give me tips for organizing events' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('event') || lowerText.includes('sports')) {
        response = `Great question about "${text}"! SportZone offers various sports events including football, basketball, cricket, tennis, and more. You can browse events on our homepage, create your own events, or join existing ones. Would you like help finding specific events?`;
      } else if (lowerText.includes('book') || lowerText.includes('join')) {
        response = `To book or join events: 1) Browse available events, 2) Click on event details, 3) Click "Book Now" if available, 4) Confirm your booking. You can manage all your bookings in the "My Bookings" section.`;
      } else if (lowerText.includes('create') || lowerText.includes('organize')) {
        response = `To create an event: 1) Go to "Create Event" page, 2) Fill in event details (name, date, location, description), 3) Set participant limits, 4) Submit for approval. You can manage your events in "Manage Events" section.`;
      } else {
        response = `Thanks for your question about "${text}". I'm here to help with SportZone features like finding events, booking activities, creating events, and general sports information. What specific aspect would you like to know more about?`;
      }
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query) => {
    handleSend(query);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                SportZone AI Assistant
              </h1>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Online & Ready to Help
              </p>
            </div>
            <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
              <Sparkles className="w-5 h-5 text-orange-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions - Mobile Scrollable */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-[76px] z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 rounded-full text-orange-700 text-sm font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fadeIn`}
            >
              {/* Avatar */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-md ${
                message.type === 'user'
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                  : 'bg-gradient-to-br from-orange-500 to-orange-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>

              {/* Message Content */}
              <div className={`flex-1 max-w-[85%] sm:max-w-[80%] md:max-w-[70%] ${message.type === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                <div
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-tr-sm'
                      : 'bg-white border border-orange-100 text-gray-800 rounded-tl-sm'
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-1 px-2">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 animate-fadeIn">
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white border border-orange-100 px-6 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white/90 backdrop-blur-xl border-t border-orange-100 shadow-lg sticky bottom-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Suggestions for empty input */}
          {messages.length === 1 && (
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <button
                onClick={() => handleQuickAction('How do I create a sports event?')}
                className="p-3 bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-xl text-left transition-all duration-300 border border-orange-100 hover:shadow-md group"
              >
                <p className="text-sm font-medium text-orange-700 group-hover:text-orange-800">
                  How do I create a sports event?
                </p>
              </button>
              <button
                onClick={() => handleQuickAction('Show me popular sports events')}
                className="p-3 bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-xl text-left transition-all duration-300 border border-orange-100 hover:shadow-md group"
              >
                <p className="text-sm font-medium text-orange-700 group-hover:text-orange-800">
                  Show me popular sports events
                </p>
              </button>
            </div>
          )}

          {/* Input Box */}
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask me about sports events, bookings, or anything SportZone related..."
                rows={1}
                className="w-full px-4 py-3 pr-24 bg-gray-50 border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-gray-800 placeholder-gray-500 max-h-32"
                style={{ minHeight: '48px' }}
              />
              <div className="absolute right-2 bottom-2 flex gap-1">
                <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-xl transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-xl transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-300 disabled:cursor-not-allowed group"
            >
              {isTyping ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>

          {/* Info Text */}
          <p className="text-xs text-center text-gray-500 mt-2">
            SportZone AI Assistant - Here to help with your sports and event needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;