const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 bg-white">

            {/* College Overview */}
            <section className="text-center">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full font-bold text-xs mb-6 uppercase tracking-widest">Our Story</div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">About Lahore College</h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                    Founded in 2015, Lahore College has quickly evolved into a premier institution dedicated to academic excellence,
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
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Our Faculty Hierarchy</h2>
                    <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                        Learn from a dedicated team of researchers and passionate educators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Teacher 1 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 p-8 text-center border border-gray-100 hover:border-green-200">
                        <div className="w-24 h-24 bg-green-50 rounded-2xl mx-auto flex items-center justify-center mb-6 text-4xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                            <i className="fas fa-flask"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Ahmed</h3>
                        <p className="text-green-600 font-bold mb-4">HOD Chemistry</p>
                        <p className="text-gray-500 text-sm leading-relaxed">Ph.D. Organic Chemistry. 15 years experience in research.</p>
                    </div>

                    {/* Teacher 2 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 p-8 text-center border border-gray-100 hover:border-green-200">
                        <div className="w-24 h-24 bg-green-50 rounded-2xl mx-auto flex items-center justify-center mb-6 text-4xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                            <i className="fas fa-square-root-alt"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Prof. Tariq Mahmood</h3>
                        <p className="text-green-600 font-bold mb-4">HOD Mathematics</p>
                        <p className="text-gray-500 text-sm leading-relaxed">M.Phil Mathematics. Renowned for simplifying calc concepts.</p>
                    </div>

                    {/* Teacher 3 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 p-8 text-center border border-gray-100 hover:border-green-200">
                        <div className="w-24 h-24 bg-green-50 rounded-2xl mx-auto flex items-center justify-center mb-6 text-4xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Engr. Ali Raza</h3>
                        <p className="text-green-600 font-bold mb-4">Computer Science</p>
                        <p className="text-gray-500 text-sm leading-relaxed">MS Software Engineering. IT industry expert.</p>
                    </div>

                    {/* Teacher 4 */}
                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 p-8 text-center border border-gray-100 hover:border-green-200">
                        <div className="w-24 h-24 bg-green-50 rounded-2xl mx-auto flex items-center justify-center mb-6 text-4xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                            <i className="fas fa-book"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Ms. Fatima Noor</h3>
                        <p className="text-green-600 font-bold mb-4">English Literature</p>
                        <p className="text-gray-500 text-sm leading-relaxed">MA English. Inspiring creative writing workshops.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
