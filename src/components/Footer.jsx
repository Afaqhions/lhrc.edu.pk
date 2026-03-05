import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-auto w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold flex items-center mb-6">
                            <i className="fas fa-university mr-2 text-green-500"></i> Lahore College
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Empowering minds, transforming futures. Recognized as one of the leading educational institutions in the region since 2020.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-green-500 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
                            <li><Link to="/admissions" className="hover:text-green-400 transition">Admissions</Link></li>
                            <li><Link to="/services" className="hover:text-green-400 transition">Our Programs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-green-500 mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mr-3 mt-1 text-green-500"></i>
                                <span>7A, Guldasht Town, Zarar Shaheed Road, Lahore Cantt</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt mr-3 text-green-500"></i>
                                <span>04236635333, 0308 7895333</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-green-500"></i>
                                <span>lahorecollegeofficial@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-green-500 mb-6 uppercase tracking-wider text-sm">Follow Our Journey</h4>
                        <div className="flex space-x-5 text-2xl">
                            <a href="https://www.facebook.com/lahorecollegeofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/lahorecollegeofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <p className="text-gray-400 text-xs mt-8">© {new Date().getFullYear()} Lahore College. All rights reserved.</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
                    Developed by Almaco | +92 309 7876 497
                </div>
            </div>
        </footer>
    );
};

export default Footer;
