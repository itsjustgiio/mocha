import logo from '../assets/mocha-logo.jpg';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center font-sans">
      <div className="text-center p-8 max-w-md">
        <img src={logo} alt="Mocha Logo" className="mx-auto w-28 h-28 rounded-full shadow-md mb-6" />
        <h1 className="text-5xl font-extrabold text-mocha mb-4">Welcome to Mocha</h1>
        <p className="text-lg text-black mb-8">Learn a new word every day <span className="text-xl">☕</span></p>
        <Link to="/learn">
            <button className="bg-mocha text-white px-6 py-3 rounded-full hover:bg-[#4b2f1a] transition shadow-md">
                Start Learning
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;