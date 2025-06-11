// src/pages/About.jsx
import React from 'react';
import mascotImage from '../assets/mocha-mascot.png';

const features = [
  {
    icon: '📚',
    title: 'Free & Accessible',
    description: 'Always free to use — signup required.',
  },
  {
    icon: '📅',
    title: 'Daily Words',
    description: 'Learn something new every single day.',
  },
  {
    icon: '🤖',
    title: 'AI Examples',
    description: 'Custom usage examples powered by AI.',
  },
];

export default function About() {
  return (
    <div className="bg-[#c4a484] text-black font-[Gabarito] min-h-screen px-6 py-12 md:px-20 md:py-16">
      <div className="flex flex-col items-center gap-10 mb-16">
  {/* Top: About Mocha */}
  <div className="flex flex-col items-center text-center mb-10">
  <div className="flex items-center gap-6">
    <h1 className="text-4xl md:text-5xl font-bold text-[#654321]">📖 About Mocha</h1>
  </div>

  <div className="bg-[#FBEBD9] p-6 rounded-lg shadow mt-6 w-full max-w-4xl">
    <p>
      Mocha is a free and accessible online platform designed to help you expand your vocabulary, one word at a time.
      We believe that everyone should have the opportunity to improve their communication skills, regardless of their
      background or financial situation.
    </p>
    <p className="mt-4">
      That’s why we've created Mocha: a fun and engaging way to learn new words daily, complete with definitions, example
      sentences, and interactive games.
    </p>
  </div>
</div>

  {/* Bottom row: Our Mission & How Mocha Works */}
  <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-6xl">
    {/* Left: Our Mission */}
    <div className="flex-1 bg-[#FBEBD9] p-6 rounded-lg shadow text-left h-full">
      <h2 className="text-2xl font-bold text-[#654321] mb-2">🌟 Our Mission</h2>
      <p>
        Mocha was born out of a personal frustration with expensive and inaccessible vocabulary learning resources. 
        We believe that everyone should have the opportunity to expand their vocabulary and improve their communication 
        skills, regardless of their background or financial situation. 
      </p>
      <p className="mt-4">
        Our mission is to provide a free and engaging platform for vocabulary building, making learning fun and accessible 
        for everyone.
      </p>
    </div>

    {/* Right: How Mocha Works */}
    <div className="flex-1 bg-[#FBEBD9] p-6 rounded-lg shadow text-left h-full">

      <h2 className="text-2xl font-bold text-[#654321] mb-2">🛠️ How Mocha Works</h2>
      <p>
        Mocha delivers a new word to you each day, complete with its definition, example 
        sentences, and engaging mini-games to help you memorize it. 
      </p>
      <p className="mt-4">
        We also offer weekly word lists for a more structured learning experience. We 
        plan to add features like personalized word lists and progress tracking in the future.
      </p>
    </div>
  </div>
</div>

      {/* Features + Extras Grid */}
      <section className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Column: Feature Cards */}
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#FBEBD9] p-6 rounded shadow-md text-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-[#654321] mb-2">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column: Quote + Coming Soon */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#FBEBD9] p-6 rounded shadow-md text-center">
            <h3 className="text-xl font-semibold text-[#654321] mb-4">💬 What users are saying</h3>
            <p className="italic text-[#3b2a1a]">
              "Mocha helped me build a better vocabulary and boosted my writing confidence!"
            </p>
          </div>
          <div className="bg-[#654321] text-white p-6 rounded shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">🚀 Coming Soon</h3>
            <p className="text-sm">
              Personalized word lists, spaced repetition, user accounts, leaderboards, and more interactive games are coming soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}