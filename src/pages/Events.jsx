import { Link } from 'react-router-dom';

const Events = () => {
    const eventsList = [
        {
            id: 1,
            title: "Quiz Competition Phase 2",
            date: "22nd Feb 2026",
            time: "11:00 AM - 1:00 PM",
            description: "A grand quiz competition for students of 10th class to test their knowledge and win exciting prizes.",
            icon: "fas fa-trophy",
            status: "Upcoming"
        },
        {
            id: 2,
            title: "Qawali Night",
            date: "TBA",
            time: "Evening",
            description: "A cultural evening filled with traditional music and soul-stirring Qawali performances.",
            icon: "fas fa-music",
            status: "Scheduled"
        },
        {
            id: 3,
            title: "IT Career Roadmap",
            date: "Every Saturday",
            time: "2:00 PM - 4:00 PM",
            description: "Free seminars for students to understand freelancing and IT career paths.",
            icon: "fas fa-laptop-code",
            status: "Weekly"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-green-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Competitions</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">Stay updated with the latest happenings, academic competitions, and cultural events at Lahore College.</p>
                </div>
            </div>

            {/* Events Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsList.map(event => (
                        <div key={event.id} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center text-3xl">
                                    <i className={event.icon}></i>
                                </div>
                                <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${event.status === 'Upcoming' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {event.status}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                            <div className="flex flex-col space-y-2 mb-6 text-gray-600 font-bold text-sm">
                                <span className="flex items-center"><i className="far fa-calendar-alt mr-2 text-green-600"></i> {event.date}</span>
                                <span className="flex items-center"><i className="far fa-clock mr-2 text-green-600"></i> {event.time}</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8">{event.description}</p>
                            <Link to="/admissions" className="inline-block w-full text-center py-4 bg-gray-50 text-green-800 font-bold rounded-lg hover:bg-green-700 hover:text-white transition shadow-sm">
                                {event.id === 1 ? 'Register Now' : 'Inquire More'}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter/Contact Section */}
            <div className="bg-green-50 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <i className="fas fa-bullhorn text-4xl text-green-700 mb-6"></i>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Don't Miss Out!</h2>
                    <p className="text-gray-600 font-bold mb-8">For more details about registrations and event venues, contact our administration office.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center text-lg font-bold text-green-800">
                            <i className="fas fa-phone-alt mr-3"></i> +92 349 3001300
                        </div>
                        <div className="flex items-center text-lg font-bold text-green-800">
                            <i className="fas fa-map-marker-alt mr-3"></i> 7-A Guldasht Town
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
