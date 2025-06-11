import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mocha-logo.jpg';

export default function WelcomePage() {
  return (
    <div className="bg-[#c4a484] min-h-screen flex flex-col items-center justify-center text-black font-gabarito text-center px-4">
      <img src={logo} alt="Mocha Logo" className="w-32 mb-6 rounded-full shadow" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#654321] mb-4">Welcome to Mocha</h1>
      <p className="text-xl md:text-2xl mb-8">Learn a new word every day ☕</p>
      <Link to="/home">
        <button className="bg-[#654321] text-white px-6 py-3 rounded-full shadow-md text-lg hover:bg-[#4b2f1a]">
          Start Learning
        </button>
      </Link>
    </div>
  );
}