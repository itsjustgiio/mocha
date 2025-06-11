import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState(["giovanni", "admin", "testuser"]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (registeredUsers.includes(formData.username.toLowerCase())) {
      newErrors.username = "Username already taken";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = "Password must include at least 1 number and 1 special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({ general: data.message || 'Signup failed' });
        return;
      }

      localStorage.setItem('token', data.token);
      navigate('/login'); // redirect after successful signup
    } catch (err) {
      console.error(err);
      setErrors({ general: 'Something went wrong' });
    }
  };

  return (
    <div className="min-h-screen bg-[#c4a484] flex justify-center items-center font-[Gabarito]">
      <div className="bg-[#FBEBD9] p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full px-3 py-2 border rounded" required />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}
              className="w-full px-3 py-2 border rounded" required />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
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
          <div>
            <label>Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="w-full bg-[#654321] text-white py-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
}