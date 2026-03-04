import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home" className="w-full bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-50 via-white to-green-100 p-12 md:p-24 shadow-sm border-b border-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Established 2015</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Nurturing Excellence, <br />
                        <span className="text-green-700">Shaping Futures.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed mb-8">
                        Experience world-class education at Lahore College, where we combine innovation with values to create tomorrow's leaders.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/admissions" className="inline-flex items-center bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-800 transition shadow-lg hover:shadow-green-200 transform hover:-translate-y-1">
                            Start Your Journey <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                        <Link to="/about" className="inline-flex items-center border-2 border-green-700 text-green-800 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition shadow transform hover:-translate-y-1">
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="bg-green-50 py-20 border-y border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">College Highlights</h2>
                        <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">25+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Expert Faculty</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">1200+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Active Students</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">100%</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Matric Result</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">9+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Global Awards</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diploma in IT Highlight */}
            <div className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center bg-green-800 rounded-3xl overflow-hidden shadow-xl">
                        <div className="md:w-1/2 p-10 md:p-16 text-white">
                            <span className="inline-block px-4 py-1 bg-green-500 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">New Program</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Diploma in IT <br /><span className="text-green-400">ICS Equivalent</span></h2>
                            <p className="text-xl text-green-50 mb-8 font-medium">100% Practical learning. Free Practical Classes for Matric students! Learn skills for IT careers & freelancing.</p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center text-lg font-bold">
                                    <i className="fas fa-phone-alt mr-4 text-green-400"></i> +92 349 3001300
                                </div>
                                <div className="flex items-center text-lg font-bold">
                                    <i className="fas fa-map-marker-alt mr-4 text-green-400"></i> 7-A Guldasht Town
                                </div>
                            </div>

                            <Link to="/admissions" className="inline-block bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-100 transition shadow-lg">
                                Register Now
                            </Link>
                        </div>
                        <div className="md:w-1/2 h-full min-h-[400px] bg-green-900 flex items-center justify-center relative">
                            <i className="fas fa-laptop-code text-9xl text-green-800/50 absolute top-10 right-10"></i>
                            <div className="relative z-10 text-center">
                                <i className="fas fa-code text-white text-[10rem] opacity-20"></i>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-full border border-white/20">
                                        <i className="fas fa-microchip text-7xl text-green-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Grid */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
                        <p className="text-gray-600 leading-relaxed">Our curriculum is designed to meet international standards while staying rooted in our core values and traditions.</p>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-heart"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Holistic Care</h3>
                        <p className="text-gray-600 leading-relaxed">We focus on the mental and emotional well-being of every student, providing a safe and supportive learning environment.</p>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-microscope"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Labs</h3>
                        <p className="text-gray-600 leading-relaxed">State-of-the-art laboratory facilities for Science and IT, ensuring practical knowledge alongside theoretical learning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
