// src/pages/HomePage.js
import { Link } from 'react-router-dom';
import bookImg from '../assets/book-image.png';
import Button from '../components/Button';
import logo from '../assets/mocha-logo.jpg';

function HomePage() {
  return (
    <div className="bg-[#c4a484] min-h-screen text-black font-[Gabarito]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-20 max-w-screen-xl mx-auto">
        <div className="max-w-xl mb-12 md:mb-0">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#654321] mb-6 leading-tight">
            Expand Your Vocabulary<br />One Word at a Time
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn a new word every day with Mocha and watch your communication skills grow.
          </p>
          <div className="space-x-4">
                <Button variant="mocha">This Week's Words</Button>
            <Link to="/signup">
                <Button variant="inverse">Start Learning</Button>
            </Link>
          </div>
        </div>
        <img src={bookImg} alt="Illustration" className="w-80 md:w-96 rounded shadow-md" />
      </section>

      {/* Feature Section */}
      <section className="px-6 md:px-12 py-16 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#FBEBD9] p-8 rounded shadow-md text-lg">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Free Vocabulary Building</li>
            <li>Engaging Word Games</li>
            <li>Daily Word Delivery</li>
            <li>Progress Tracking (Coming Soon)</li>
            <li>AI-Powered Examples (Coming Soon)</li>
          </ul>
        </div>
        <div className="bg-[#654321] text-white p-8 rounded shadow-md text-lg md:text-xl leading-relaxed">
          <h2 className="text-3xl font-bold mb-4">Serendipity</h2>
          <p><strong>Definition:</strong> The occurrence and development of events by chance in a happy or beneficial way.</p>
          <p className="mt-4"><strong>Example:</strong> Finding a twenty-dollar bill on the sidewalk was a moment of pure serendipity.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;