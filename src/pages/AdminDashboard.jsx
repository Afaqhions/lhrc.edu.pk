import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialStudents = [
    { id: 1, name: 'Ali Hassan', program: 'FSc Pre-Engineering', email: 'ali@example.com', status: 'Pending' },
    { id: 2, name: 'Ayesha Khan', program: 'ICS', email: 'ayesha@example.com', status: 'Enrolled' },
    { id: 3, name: 'Zainab Bibi', program: 'FSc Pre-Medical', email: 'zainab@example.com', status: 'Rejected' },
];

const initialJobs = [
    { id: 1, name: 'Usman Tariq', position: 'Teacher', experience: '5 Years', status: 'Under Review' },
    { id: 2, name: 'Sara Ahmed', position: 'Principal', experience: '10 Years', status: 'Interviewing' },
    { id: 3, name: 'Bilal Malik', position: 'IT Support', experience: '2 Years', status: 'Hired' },
    { id: 4, name: 'Fatima Noor', position: 'Librarian', experience: '1 Year', status: 'Rejected' },
];

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('students');
    const [students, setStudents] = useState(initialStudents);
    const [jobs, setJobs] = useState(initialJobs);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('babarAdminAuth');
        if (!isAuth) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('babarAdminAuth');
        navigate('/admin/login');
    };

    const updateStudentStatus = (id, newStatus) => {
        setStudents((prev) =>
            prev.map((student) => (student.id === id ? { ...student, status: newStatus } : student))
        );
    };

    const deleteStudent = (id) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };

    const updateJobStatus = (id, newStatus) => {
        setJobs((prev) =>
            prev.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
        );
    };

    const removeJob = (id) => {
        setJobs((prev) => prev.filter((job) => job.id !== id));
    };

    const getStudentStatusColor = (status) => {
        switch (status) {
            case 'Enrolled': return 'bg-blue-100 text-blue-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getJobStatusColor = (status) => {
        switch (status) {
            case 'Hired': return 'bg-green-100 text-green-800';
            case 'Interviewing': return 'bg-blue-100 text-blue-800';
            case 'Under Review': return 'bg-yellow-100 text-yellow-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-800 text-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Lahore College Admin Portal</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-white text-green-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition shadow"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex bg-white rounded-lg p-1 mb-8 shadow border border-gray-100 inline-flex">
                    <button
                        onClick={() => setActiveTab('students')}
                        className={`px-6 py-3 text-center rounded-md font-semibold transition ${activeTab === 'students'
                            ? 'bg-green-700 text-white shadow'
                            : 'text-gray-600 hover:text-green-700 hover:bg-gray-100'
                            }`}
                    >
                        Manage Students
                    </button>
                    <button
                        onClick={() => setActiveTab('jobs')}
                        className={`px-6 py-3 text-center rounded-md font-semibold transition ${activeTab === 'jobs'
                            ? 'bg-green-700 text-white shadow'
                            : 'text-gray-600 hover:text-green-700 hover:bg-gray-100'
                            }`}
                    >
                        Job Applications
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                    {activeTab === 'students' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {students.map((student) => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.program}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStudentStatusColor(student.status)}`}>
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 flex items-center">
                                                <select
                                                    value={student.status}
                                                    onChange={(e) => updateStudentStatus(student.id, e.target.value)}
                                                    className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:ring-green-500 focus:border-green-500"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Enrolled">Enrolled</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                                <button onClick={() => deleteStudent(student.id)} className="text-red-600 hover:text-red-900 font-bold ml-2">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {students.length === 0 && (
                                        <tr><td colSpan="5" className="px-6 py-4 text-center text-gray-500">No students found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'jobs' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {jobs.map((job) => (
                                        <tr key={job.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.position}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.experience}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getJobStatusColor(job.status)}`}>
                                                    {job.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 flex items-center">
                                                <select
                                                    value={job.status}
                                                    onChange={(e) => updateJobStatus(job.id, e.target.value)}
                                                    className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:ring-green-500 focus:border-green-500"
                                                >
                                                    <option value="Under Review">Under Review</option>
                                                    <option value="Interviewing">Interviewing</option>
                                                    <option value="Hired">Hired</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                                <button onClick={() => removeJob(job.id)} className="text-red-600 hover:text-red-900 font-bold ml-2">Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {jobs.length === 0 && (
                                        <tr><td colSpan="5" className="px-6 py-4 text-center text-gray-500">No job applications found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
