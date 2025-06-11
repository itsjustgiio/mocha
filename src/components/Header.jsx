import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/mocha-logo.jpg';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { loggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-[#c4a484] text-black font-[Gabarito]">
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-[#FBEBD9] shadow">
        <Link to="/home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Mocha Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold text-[#654321]">Mocha</span>
        </Link>

        <nav className="space-x-4">
          <NavLink to="/about"><Button variant="nav">About</Button></NavLink>
          <NavLink to="/contact"><Button variant="nav">Contact</Button></NavLink>

          {loggedIn ? (
            <>
              <NavLink to="/dashboard"><Button variant="nav">Dashboard</Button></NavLink>
              <Button onClick={handleLogout} variant="nav">Log out</Button>
            </>
          ) : (
            <>
              <NavLink to="/signup"><Button variant="nav">Sign Up</Button></NavLink>
              <NavLink to="/login"><Button variant="nav">Login</Button></NavLink>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}