import { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventsList = [
        {
            id: 1,
            title: "TRIPS & Industrial Tours",
            date: "Scheduled Semi-Annually",
            time: "Full Day",
            description: "Educational and recreational trips to historical sites and industrial hubs to provide practical exposure to our students.",
            icon: "fas fa-bus",
            status: "Regular",
            details: "Our college organizes multiple trips throughout the year. These include visits to northern areas, industrial plants for ICS students, and historical landmarks for Humanities students. These trips are designed to blend learning with entertainment, fostering a well-rounded educational experience."
        },
        {
            id: 2,
            title: "Quiz Competition",
            date: "Phase 2 - March 2026",
            time: "10:00 AM - 1:00 PM",
            description: "A grand academic competition testing students' knowledge across various subjects with exciting prizes for winners.",
            icon: "fas fa-trophy",
            status: "Upcoming",
            details: "The competition covers General Knowledge, Science, and Literature. Winners receive shields, merit certificates, and special scholarships. It is a platform for students to showcase their academic prowess and competitive spirit."
        },
        {
            id: 3,
            title: "Qawali Night",
            date: "April 2026",
            time: "6:00 PM - 10:00 PM",
            description: "A cultural evening filled with traditional music and soul-stirring Qawali performances by renowned artists.",
            icon: "fas fa-music",
            status: "Scheduled",
            details: "An annual tradition where students and faculty gather to enjoy the rich heritage of Sufi music. The event promotes cultural awareness and provides a relaxing break from academic rigor."
        },
        {
            id: 4,
            title: "Welcome Party",
            date: "Annually in Nov",
            time: "11:00 AM - 3:00 PM",
            description: "A grand celebration to welcome our new students to the Lahore College family.",
            icon: "fas fa-handshake",
            status: "Annual",
            details: "The event includes talent shows, skits, and a formal lunch to foster bonding between seniors and juniors. It is the highlight of the first semester, helping new students integrate into the college culture."
        },
        {
            id: 5,
            title: "Sports Gala",
            date: "February Annually",
            time: "Multiple Days",
            description: "A week-long sports event featuring Cricket, Football, Badminton, and Athletics.",
            icon: "fas fa-running",
            status: "Completed",
            details: "Our Sports Gala promotes physical health and sportsmanship. Competitive matches are held between houses, culminating in a prize distribution ceremony. It's a time of high energy and college spirit."
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
                        <div key={event.id} className={`bg-white rounded-2xl p-8 border transition-all duration-300 ${selectedEvent === event.id ? 'border-green-500 shadow-xl ring-2 ring-green-100' : 'border-gray-100 shadow-sm hover:shadow-lg'}`}>
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
                            <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>

                            {selectedEvent === event.id && (
                                <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-100 text-sm text-gray-700 leading-relaxed animate-fade-in">
                                    <h4 className="font-bold text-green-800 mb-2 flex items-center">
                                        <i className="fas fa-info-circle mr-2"></i> Event Details
                                    </h4>
                                    {event.details}
                                </div>
                            )}

                            <button
                                onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                                className={`inline-block w-full text-center py-4 font-bold rounded-xl transition shadow-sm ${selectedEvent === event.id ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-gray-50 text-green-800 hover:bg-green-700 hover:text-white'
                                    }`}
                            >
                                {selectedEvent === event.id ? 'Show Less' : 'View Full Info'}
                            </button>
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
