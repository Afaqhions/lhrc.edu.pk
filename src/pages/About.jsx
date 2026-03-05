const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 bg-white">

            {/* College Overview */}
            <section className="text-center">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full font-bold text-xs mb-6 uppercase tracking-widest">Our Story</div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">About Lahore College</h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                    Founded in 2020, Lahore College has quickly evolved into a premier institution dedicated to academic excellence,
                    intellectual freedom, and the holistic development of our student body.
                </p>
            </section>

            {/* Director Section */}
            <section id="director" className="bg-green-50 p-10 md:p-16 rounded-[3rem] shadow-sm border border-green-100 flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/3 flex justify-center">
                    <div className="w-72 h-72 rounded-[2.5rem] bg-white border-8 border-green-100 shadow-xl flex items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <i className="fas fa-user-tie text-green-700 text-9xl"></i>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <div className="inline-block px-4 py-1 bg-white text-green-700 rounded-full font-bold text-xs mb-6 uppercase tracking-wide">College Leadership</div>
                    <h2 className="text-4xl font-black text-gray-900 mb-2">Prof. Babar Iqbal Awan</h2>
                    <h3 className="text-xl text-green-600 font-bold mb-8">Director, Lahore College</h3>

                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl italic border-l-8 border-green-600 text-gray-700 text-xl leading-relaxed shadow-sm">
                        "At Lahore College, we believe education goes beyond textbooks. Our mission is to empower students with critical thinking, ethical values, and the skills to thrive in a global society."
                    </div>
                    <p className="mt-8 text-gray-600 text-lg font-medium leading-relaxed">
                        With over 25 years of distinguished service in academia, Prof. Babar Iqbal Awan brings visionary leadership to Lahore College, focusing on integrating modern technology with traditional educational values.
                    </p>
                </div>
            </section>

            {/* Teachers Section */}
            <section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Our Dedicated Faculty</h2>
                    <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                        Learn from a dedicated team of researchers and passionate educators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Teacher 1 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Muhammad Ehtisham Arif</h3>
                            <p className="text-green-600 font-bold mb-4">Mathematics</p>
                            <p className="text-gray-500 text-sm leading-relaxed">BS Honors Mathematics (University of Education)</p>
                        </div>
                    </div>

                    {/* Teacher 2 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Muhammad Irfan Faryad</h3>
                            <p className="text-green-600 font-bold mb-4">Chemistry</p>
                            <p className="text-gray-500 text-sm leading-relaxed">Mphil Chemistry (University of Punjab)</p>
                        </div>
                    </div>

                    {/* Teacher 3 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Attiq ur Rehman</h3>
                            <p className="text-green-600 font-bold mb-4">English</p>
                            <p className="text-gray-500 text-sm leading-relaxed">M.A English (Punjab University)</p>
                        </div>
                    </div>

                    {/* Teacher 4 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Muhammad Khalil</h3>
                            <p className="text-green-600 font-bold mb-4">Commerce</p>
                            <p className="text-gray-500 text-sm leading-relaxed">M.COM (Hailey College)</p>
                        </div>
                    </div>

                    {/* Teacher 5 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Rashid Mehmood</h3>
                            <p className="text-green-600 font-bold mb-4">Statistics</p>
                            <p className="text-gray-500 text-sm leading-relaxed">Mphil Statistics (GCU)</p>
                        </div>
                    </div>

                    {/* Teacher 6 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Muhammad Sarfraz</h3>
                            <p className="text-green-600 font-bold mb-4">Urdu</p>
                            <p className="text-gray-500 text-sm leading-relaxed">M.A Urdu (PU)</p>
                        </div>
                    </div>

                    {/* Teacher 7 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Abu Bakar</h3>
                            <p className="text-green-600 font-bold mb-4">Computer Science</p>
                            <p className="text-gray-500 text-sm leading-relaxed">BSCS (LGU)</p>
                        </div>
                    </div>

                    {/* Teacher 8 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professor"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                <span className="text-white font-bold text-sm tracking-widest uppercase">Expert Faculty</span>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-900">Shahid Hussain</h3>
                            <p className="text-green-600 font-bold mb-4">Urdu</p>
                            <p className="text-gray-500 text-sm leading-relaxed">M.A Urdu (PU)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
