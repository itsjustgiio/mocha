import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

export default function Dashboard() {
  const [username, setUsername] = useState('[Username]');
  const [date, setDate] = useState('');
  const [streak, setStreak] = useState(3); // placeholder for now

  useEffect(() => {
  // Set today's date
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  setDate(today);

  // Fetch logged-in user's info
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUsername(data.username);
    } catch (err) {
      console.error('Failed to fetch user', err);
    }
  };

  fetchUser();
}, []);

  return (
    <div className="min-h-screen bg-[#c4a484] font-[Gabarito] p-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Welcome Box */}
        <div className="bg-[#FBEBD9] p-6 rounded mb-6 shadow-md">
          <p className="text-sm text-gray-700">{date}</p>
          <h1 className="text-xl font-bold mt-1">Welcome, {username}!</h1>
          <p className="text-sm text-gray-700 mt-1">Ready to expand your vocabulary?</p>
          <p className="text-sm text-orange-600 font-semibold mt-2">🔥 Streak: {streak} day{streak !== 1 && 's'}</p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Weekly Words Section */}
          <div className="bg-[#654321] text-white rounded p-4 shadow-md">
            <h2 className="text-lg font-semibold border-b border-white pb-1 mb-3">Weekly Words</h2>
            <div className="grid grid-cols-2 gap-y-2 text-base">
              <p>Monday: <span className="font-semibold">[Word]</span></p>
              <p>Friday: <span className="font-semibold">[Word]</span></p>
              <p>Tuesday: <span className="font-semibold">[Word]</span></p>
              <p>Saturday: <span className="font-semibold">[Word]</span></p>
              <p>Wednesday: <span className="font-semibold">[Word]</span></p>
              <p>Sunday: <span className="font-semibold">[Word]</span></p>
              <p>Thursday: <span className="font-semibold">[Word]</span></p>
            </div>
          </div>

          {/* Daily Word Section */}
          <div className="bg-[#FBEBD9] p-6 rounded shadow-md text-center flex flex-col justify-between w-full">
            <div>
              <h2 className="text-lg font-semibold mb-2">Daily Word</h2>
              <p className="text-xl font-bold mb-4">[Word]</p>
            </div>
            <Button variant="inverse">Start Learning This Word</Button>

          </div>
        </div>
      </div>
    </div>
  );
}
