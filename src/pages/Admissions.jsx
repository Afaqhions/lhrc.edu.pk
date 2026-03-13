import { useState } from 'react';

const Admissions = () => {
    const [activeTab, setActiveTab] = useState('student');
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Admissions & Careers</h1>
                <p className="text-lg text-gray-600">Join Lahore College and build your future with us.</p>
            </div>

            {submitted && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-600 p-4 rounded shadow-md flex items-center">
                    <i className="fas fa-check-circle text-green-600 text-xl mr-3"></i>
                    <div>
                        <h4 className="font-bold text-green-900">Application Submitted!</h4>
                        <p className="text-green-800 text-sm">Our team will contact you shortly.</p>
                    </div>
                </div>
            )}

            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                <button
                    onClick={() => setActiveTab('student')}
                    className={`flex-1 py-3 text-center rounded-md font-semibold transition ${activeTab === 'student'
                        ? 'bg-green-700 text-white shadow'
                        : 'text-gray-600 hover:text-green-700 hover:bg-gray-200'
                        }`}
                >
                    Student Admission
                </button>
                <button
                    onClick={() => setActiveTab('faculty')}
                    className={`flex-1 py-3 text-center rounded-md font-semibold transition ${activeTab === 'faculty'
                        ? 'bg-green-700 text-white shadow'
                        : 'text-gray-600 hover:text-green-700 hover:bg-gray-200'
                        }`}
                >
                    Faculty Application
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-100">
                {activeTab === 'student' ? <StudentForm setSubmitted={setSubmitted} /> : <FacultyForm setSubmitted={setSubmitted} />}
            </div>
        </div>
    );
};

const StudentForm = ({ setSubmitted }) => {
    const [formData, setFormData] = useState({
        name: '', fatherName: '', motherName: '', email: '',
        phone: '', fatherPhone: '', city: 'Lahore', address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Student Data:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Father's Name *</label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter Father's Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mother's Name *</label>
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter Mother's Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="03XXXXXXXXX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Father's Contact *</label>
                    <input type="tel" name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} placeholder="03XXXXXXXXX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select City *</label>
                <select name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition">
                    <option>Lahore</option>
                    <option>Sheikhupura</option>
                    <option>Kasur</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Residential Address *</label>
                <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Enter Full Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required></textarea>
            </div>

            <button type="submit" className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition shadow-md">
                Submit Admission Form
            </button>
        </form>
    );
};

const FacultyForm = ({ setSubmitted }) => {
    const [formData, setFormData] = useState({
        name: '', phone: '', qualification: 'Masters', position: 'Teacher',
        subject: '', city: 'Lahore', address: '', email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Faculty Data:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@gmail.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="03XXXXXXXXX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
                    <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition">
                        <option>Masters</option>
                        <option>M.Phil</option>
                        <option>PhD</option>
                        <option>Bachelors</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject Specialization *</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Physics" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For *</label>
                    <select name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition">
                        <option value="Teacher">Teacher</option>
                        <option value="Principal">Principal</option>
                        <option value="IT Support">IT Support</option>
                        <option value="Librarian">Librarian</option>
                        <option value="Admin Staff">Admin Staff</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                <select name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition">
                    <option>Lahore</option>
                    <option>Sheikhupura</option>
                    <option>Kasur</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Address *</label>
                <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Enter Full Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" required></textarea>
            </div>

            <button type="submit" className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition shadow-md">
                Submit Job Application
            </button>
        </form>
    );
};

export default Admissions;
