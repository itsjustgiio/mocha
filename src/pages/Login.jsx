import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = "Please enter your username";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Please enter your password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login attempt:", formData);
      // 🔥 Later you'll send this to your backend API to authenticate
    }
  };

  return (
    <div className="min-h-screen bg-[#c4a484] flex justify-center items-center font-[Gabarito]">
      <div className="bg-[#FBEBD9] p-8 rounded-xl shadow-lg w-96 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Username</label>
            <input
              type="text"
              name="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.emailOrUsername && <p className="text-red-500 text-sm">{errors.emailOrUsername}</p>}
          </div>

          <div>
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-[#654321] text-white py-2 rounded">Log In</button>
        </form>
      </div>
    </div>
  );
}