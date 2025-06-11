import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = 'Please enter your username or email';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Please enter your password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  // DEBUG LOG
  console.log('Submitting login with:', formData);

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailOrUsername: formData.emailOrUsername,
        password: formData.password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setErrors({ general: data.message || 'Login failed' });
      return;
    }

    localStorage.setItem('token', data.token);
    navigate('/account');
  } catch (err) {
    console.error(err);
    setErrors({ general: 'Something went wrong' });
  }
};

  return (
    <div className="min-h-screen bg-[#c4a484] flex justify-center items-center font-[Gabarito]">
      <div className="bg-[#FBEBD9] p-8 rounded-xl shadow-lg w-96 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Username or Email</label>
            <input
              type="text"
              name="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.emailOrUsername && (
              <p className="text-red-500 text-sm">{errors.emailOrUsername}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="w-full bg-[#654321] text-white py-2 rounded">
            Log In
          </button>

          {errors.general && (
            <p className="text-red-500 text-sm text-center mt-2">{errors.general}</p>
          )}
        </form>
      </div>
    </div>
  );
}