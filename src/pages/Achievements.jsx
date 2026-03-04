const Achievements = () => {
    const achievements = [
        {
            year: "2023",
            title: "Best Regional College Award",
            description: "Recognized by the Punjab Education Board for exceptional academic performance.",
            icon: "fa-trophy"
        },
        {
            year: "2022",
            title: "100% Passing Rate",
            description: "Our ICS and FSC batches achieved a flawless 100% result in board examinations.",
            icon: "fa-chart-line"
        },
        {
            year: "2021",
            title: "Science Exhibition Winners",
            description: "First prize at the National Science Fair for our innovative Solar Energy project.",
            icon: "fa-certificate"
        },
        {
            year: "2019",
            title: "Modern Lab Expansion",
            description: "Inaugurated state-of-the-art IT and Chemistry laboratories.",
            icon: "fa-flask"
        },
        {
            year: "2015",
            title: "College Inception",
            description: "Opened our doors with a vision to provide quality education in Lahore.",
            icon: "fa-university"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
            <div className="text-center mb-20">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full font-bold text-xs mb-4 uppercase tracking-widest">Our Legacy</div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Achievements & Milestones</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                    A track record of excellence since 2015.
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-green-100 rounded-full hidden md:block"></div>

                <div className="space-y-16">
                    {achievements.map((achievement, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Content Card */}
                            <div className="md:w-1/2 group">
                                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-2xl hover:shadow-green-50 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-3xl font-black text-green-700">{achievement.year}</div>
                                        <div className="h-px bg-green-200 flex-grow"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{achievement.description}</p>
                                </div>
                            </div>

                            {/* Icon Bubble */}
                            <div className="z-10 w-20 h-20 rounded-2xl bg-green-700 text-white flex items-center justify-center text-3xl shadow-lg border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <i className={`fas ${achievement.icon}`}></i>
                            </div>

                            {/* Spacer for MD screens */}
                            <div className="md:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;

