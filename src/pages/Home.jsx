import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Nurturing Excellence,",
            subtitle: "Shaping Futures.",
            description: "Experience world-class education at Lahore College, where we combine innovation with values to create tomorrow's leaders.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756eba33f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Placeholder, user will replace
            accent: "text-green-700"
        },
        {
            title: "Practical Learning,",
            subtitle: "IT Excellence.",
            description: "Empowering students with 100% practical IT training and skill-based learning for the modern digital era.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Placeholder
            accent: "text-blue-700"
        },
        {
            title: "Join the Family,",
            subtitle: "Build Your Career.",
            description: "Discover a supportive environment where your potential is recognized and your ambitions are achieved.",
            image: "https://images.unsplash.com/photo-1523050853064-8521a37651e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Placeholder
            accent: "text-orange-700"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section id="home" className="w-full bg-white overflow-hidden">
            {/* Hero Slider */}
            <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Slide Image Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear scale-105"
                            style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.7), rgba(0,0,0,0.2)), url(${slide.image})` }}
                        ></div>

                        {/* Content Overlay */}
                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                            <div className={`transition-all duration-700 delay-300 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="inline-block px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">Established 2020</div>
                                <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                    {slide.title} <br />
                                    <span className={slide.accent}>{slide.subtitle}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed mb-8 font-medium">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/admissions" className="inline-flex items-center bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition shadow-lg hover:shadow-green-200 transform hover:-translate-y-1">
                                        Start Your Journey <i className="fas fa-arrow-right ml-2"></i>
                                    </Link>
                                    <Link to="/about" className="inline-flex items-center border-2 border-green-700 text-green-800 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition shadow transform hover:-translate-y-1">
                                        Explore More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${index === currentSlide ? 'bg-green-700 w-10' : 'bg-gray-400'}`}
                        ></button>
                    ))}
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
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">3+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Vehicle Services for Students</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">5+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Study Programs</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">5+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">Sports Activities</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100">
                            <div className="text-4xl font-black text-green-700 mb-2">10+</div>
                            <div className="text-gray-600 font-bold uppercase text-xs tracking-widest">IT & Different Courses</div>
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
                                <div className="flex items-center text-lg">
                                    <i className="fas fa-phone-alt mr-4 text-green-400"></i>Contact:  +92 423 663 5333 | +92 308 789 5333
                                </div>
                                <div className="flex items-center text-lg">
                                    <i className="fas fa-phone-alt mr-4 text-green-400"></i> Email: lahorecollegeofficial@gmail.com
                                </div>
                                <div className="flex items-center text-lg">
                                    <i className="fas fa-map-marker-alt mr-4 text-green-400"></i> Address: 7-A Guldasht Town, Zarar Shahedd Road, Lahore Cantt.
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
