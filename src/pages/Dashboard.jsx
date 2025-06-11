import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [username, setUsername] = useState('[Username]');
  const [date, setDate] = useState('');
  const [streak, setStreak] = useState(3); // placeholder for now

  useEffect(() => {
    // set current date
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setDate(today);
  }, []);

  return (
    <div className="min-h-screen bg-[#c4a484] font-[Gabarito] p-6">
      {/* Header */}
      <div className="bg-[#FBEBD9] p-4 rounded mb-6">
        <p className="text-sm">{date}</p>
        <h1 className="text-xl font-bold">Welcome, {username}!</h1>
        <p className="text-sm text-gray-700 mt-1">Ready to expand your vocabulary?</p>
        <p className="text-sm text-orange-600 font-semibold mt-1">🔥 Streak: {streak} day{streak !== 1 && 's'}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weekly Words */}
        <div className="bg-[#654321] text-white rounded p-4">
          <h2 className="text-lg font-semibold border-b border-white pb-1 mb-3">Weekly Words</h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <p>Monday: <span className="font-semibold">[Word]</span></p>
            <p>Friday: <span className="font-semibold">[Word]</span></p>
            <p>Tuesday: <span className="font-semibold">[Word]</span></p>
            <p>Saturday: <span className="font-semibold">[Word]</span></p>
            <p>Wednesday: <span className="font-semibold">[Word]</span></p>
            <p>Sunday: <span className="font-semibold">[Word]</span></p>
            <p>Thursday: <span className="font-semibold">[Word]</span></p>
          </div>
        </div>

        {/* Daily Word */}
        <div className="bg-[#FBEBD9] p-4 rounded text-center flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">Daily Word</h2>
            <p className="text-xl font-bold mb-4">[Word]</p>
          </div>
          <button className="bg-transparent border border-[#654321] hover:bg-[#654321] hover:text-white text-[#654321] px-4 py-2 rounded mt-2">
            Start Learning This Word
          </button>
        </div>
      </div>
    </div>
  );
}