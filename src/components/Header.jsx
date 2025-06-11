import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/mocha-logo.jpg';
import Button from './Button';

export default function Header() {
  return (
    <div className="bg-[#c4a484] text-black font-[Gabarito]">
      {/* Nav Bar */}
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-[#FBEBD9] shadow">
        <Link to="/home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Mocha Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold text-[#654321]">Mocha</span>
        </Link>
        <nav className="space-x-4">
          <Link to="/about"><Button variant="nav">About</Button></Link>
          <Link to="/contact"><Button variant="nav">Contact</Button></Link>
          <Link to="/signup"><Button variant="nav">Sign up</Button></Link>
          <Link to="/login"><Button variant="nav">Login</Button></Link>
        </nav>
      </header>
    </div> 
  );
}