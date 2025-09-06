import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import CreatAnimation from "../../Loti-animesun/Creat-account.json";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // password validation function
  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    return hasUppercase && hasLowercase && hasMinLength;
  };

  // handle form submit
  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      Swal.fire("Error", "All fields are required!", "error");
      return;
    }

    if (!validatePassword(formData.password)) {
      Swal.fire(
        "Invalid Password",
        "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long.",
        "error"
      );
      return;
    }

    // TODO: Connect with your backend / Firebase here
    console.log("User Registered:", formData);

    Swal.fire("Success", "Registration successful!", "success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Lottie Animation */}
        <div className="hidden md:flex items-center justify-center bg-green-50 p-6">
          <Lottie animationData={CreatAnimation} loop={true} />
        </div>

        {/* Register Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Create Your Account
          </h2>

          {/* Lottie Animation */}
                  <div className="flex justify-center mb-6">
                    <Lottie animationData={CreatAnimation} loop={true} className="w-32 h-32" />
                  </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Profile Picture URL */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Profile Picture URL
              </label>
              <input
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/loginpage" className="text-green-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
