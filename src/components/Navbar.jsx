import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lahoreclogo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / College name */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Lahore College Logo" className="h-10 w-10 mr-2 object-contain" />
                            <span className="font-bold text-xl text-gray-900 tracking-tight">Lahore College</span>
                        </Link>
                    </div>
                    {/* Nav links (desktop) */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/" className="text-gray-800 hover:text-green-800 px-2 py-2 text-sm font-semibold transition">Home</Link>
                        <Link to="/about" className="text-gray-800 hover:text-green-800 px-2 py-2 text-sm font-semibold transition">About Us</Link>
                        <Link to="/services" className="text-gray-800 hover:text-green-800 px-2 py-2 text-sm font-semibold transition">Programs</Link>
                        <Link to="/events" className="text-gray-800 hover:text-green-800 px-2 py-2 text-sm font-semibold transition">Events</Link>
                        <Link to="/achievements" className="text-gray-800 hover:text-green-800 px-2 py-2 text-sm font-semibold transition">Achievements</Link>
                        <Link to="/admissions" className="bg-green-800 text-white hover:bg-green-900 px-5 py-2 rounded-md text-sm font-bold transition shadow-md">Admissions & Careers</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-green-800 focus:outline-none"
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-lg">
                    <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 transition">Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 transition">About Us</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 transition">Programs</Link>
                    <Link to="/events" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 transition">Events</Link>
                    <Link to="/achievements" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50 transition">Achievements</Link>
                    <Link to="/admissions" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-green-800 hover:bg-green-50 transition">Admissions & Careers</Link>
                </div>

            )}
        </nav>
    );
};

export default Navbar;
