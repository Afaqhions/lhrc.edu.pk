const Services = () => {
    const programs = [
        {
            title: "Diploma in IT",
            icon: "fa-laptop-code",
            description: "100% Practical training for IT careers and freelancing. Special free classes for Matric students. Equivalent to ICS.",
            duration: "ICS Equivalent",
            subjects: ["Web Development", "Graphic Design", "Office Automation", "Freelancing", "IT Skills"]
        },
        {
            title: "FSC Pre-Medical",
            icon: "fa-heartbeat",
            description: "A comprehensive program designed for students aspiring to pursue careers in medicine and dental health.",
            duration: "2 Years",
            subjects: ["Biology", "Physics", "Chemistry", "English", "Urdu", "Islamic Studies"]
        },
        {
            title: "FSC Pre-Engineering",
            icon: "fa-cogs",
            description: "Tailored for future engineers. Provides a strong foundation in physics and mathematics.",
            duration: "2 Years",
            subjects: ["Mathematics", "Physics", "Chemistry", "English", "Urdu", "Islamic Studies"]
        },
        {
            title: "ICS (Physics/Maths)",
            icon: "fa-laptop-code",
            description: "The ideal launchpad for tech leaders. Focuses on programming, physics, and computing concepts.",
            duration: "2 Years",
            subjects: ["Computer science", "Physics", "Mathematics", "English", "Urdu", "Islamiat", "Tarjamat ul Quran", "Pakistan Studies"]
        },
        {
            title: "ICS (Stats/Maths)",
            icon: "fa-calculator",
            description: "Focuses on statistics and mathematics alongside computer science for data-driven careers.",
            duration: "2 Years",
            subjects: ["Computer Science", "Statistics", "Mathematics", "English", "Urdu", "Islamiat", "Tarjamat ul Quran", "Pakistan Studies"]
        },
        {
            title: "Humanities & Arts",
            icon: "fa-book-reader",
            description: "Fosters critical thinking and a deep understanding of human society and culture.",
            duration: "2 Years",
            subjects: ["Education", "Civics", "Computer", "English", "Urdu", "Islamiat", "Tarjamat ul Quran", "Pakistan Studies"]
        },
        {
            title: "ADP (2 Years)",
            icon: "fa-user-graduate",
            description: "A 2-year undergraduate program focusing on skill development and quick transition to jobs.",
            duration: "2 Years",
            subjects: ["Computer Science", "Business Administration", "Commerce"]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
            <div className="text-center mb-20">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full font-bold text-xs mb-4 uppercase tracking-widest">Academic Pathways</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                    Choose a path that aligns with your passions and career goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {programs.map((program, index) => (
                    <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col">
                        <div className="bg-green-50 p-8 flex justify-center items-center group-hover:bg-green-700 transition-colors duration-500">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-green-700 text-3xl shadow-sm transform group-hover:rotate-12 transition-transform duration-500">
                                <i className={`fas ${program.icon}`}></i>
                            </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-green-50 text-green-700 font-bold rounded-lg text-xs uppercase tracking-wider">
                                    {program.duration}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-medium">{program.description}</p>

                            <div className="mt-auto space-y-4">
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Key Subjects</h4>
                                <div className="flex flex-wrap gap-2">
                                    {program.subjects.map((sub, i) => (
                                        <span key={i} className="text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
