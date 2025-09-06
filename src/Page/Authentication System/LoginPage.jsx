import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginAnimation from "../../Loti-animesun/Login.json"

import Lottie from "lottie-react";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add email/password login logic
    console.log("Login submitted");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            {/* Lottie Animation */}
            <div className="hidden md:flex items-center justify-center bg-green-50 p-6">
              <Lottie animationData={loginAnimation} loop={true} />
            </div>
    
            {/* Register Form */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
                Login to Your Account
              </h2>
    
              {/* Lottie Animation */}
                      <div className="flex justify-center mb-6">
                        <Lottie animationData={loginAnimation} loop={true} className="w-32 h-32" />
                      </div>
              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-gray-900 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-950 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-1">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-xl text-gray-950 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
                >
                  Login
                </motion.button>
              </form>
              {/* Register Link */}
              <p className="text-center text-gray-600 mt-6">
                Don't have an account?{" "}
                <Link to="/register-page" className="text-green-600 font-semibold hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
  );
}
