import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firbas/Firbas';
import { updateProfile } from 'firebase/auth';
import { User, Mail, Calendar, Trophy, Settings, Camera, Save, ArrowLeft } from 'lucide-react';

export default function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    photoURL: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setFormData({
        displayName: currentUser.displayName || '',
        email: currentUser.email || '',
        photoURL: currentUser.photoURL || ''
      });
    }
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL
      });
      setUser(auth.currentUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-orange-600">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-12 text-white relative">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={user.photoURL || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-orange-700 p-2 rounded-full hover:bg-orange-800 transition">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user.displayName || 'User'}</h1>
                <p className="text-orange-100 text-lg">SportZone Athlete</p>
                <div className="flex items-center mt-2 text-orange-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Joined {new Date(user.metadata.creationTime).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition flex items-center space-x-2"
            >
              <Settings className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Display Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.displayName}
                        onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{user.displayName || 'Not set'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{user.email}</p>
                  </div>

                  {isEditing && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Photo URL
                      </label>
                      <input
                        type="url"
                        value={formData.photoURL}
                        onChange={(e) => setFormData({...formData, photoURL: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="https://example.com/photo.jpg"
                      />
                    </div>
                  )}
                </div>

                {isEditing && (
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{loading ? 'Saving...' : 'Save Changes'}</span>
                  </button>
                )}
              </div>

              {/* Activity Stats */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity Overview</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <div className="text-sm text-gray-600">Events Joined</div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <div className="text-sm text-gray-600">Upcoming Events</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Booked Basketball Championship</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Joined Swimming Competition</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Updated profile information</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
