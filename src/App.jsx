import { useState } from 'react'
import './App.css'

function App() {
  // State for admission form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'cs'
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Admission form submitted:', formData)
    setFormSubmitted(true)
    setFormData({ name: '', email: '', phone: '', program: 'cs' })
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / College name */}
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-university text-indigo-700 text-2xl mr-2"></i>
              <span className="font-bold text-xl text-gray-800">Lahore College</span>
            </div>
            {/* Nav links (desktop) */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition">Home</a>
              <a href="#director" className="text-gray-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition">Director's Message</a>
              <a href="#admission" className="text-gray-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition">Admission</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-500 hover:text-indigo-600 focus:outline-none">
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Home Section */}
        <section id="home" className="scroll-mt-20">
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl p-8 md:p-12 shadow-inner">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Welcome to Lahore College</h1>
            <p className="text-lg text-gray-700 max-w-3xl">Excellence in education since 2015. We nurture future leaders through innovative learning and character building. Explore our world-class programs and vibrant campus life.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#admission" className="inline-flex items-center bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition shadow">Apply Now <i className="fas fa-arrow-right ml-2"></i></a>
              <a href="#contact" className="inline-flex items-center border-2 border-indigo-700 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Director's Message Section */}
        <section id="director" className="scroll-mt-20 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-user-tie text-indigo-600 mr-3"></i> Director's Message
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex justify-center">
              {/* Director image placeholder */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-indigo-100 border-4 border-indigo-200 flex items-center justify-center overflow-hidden shadow-lg">
                <i className="fas fa-chalkboard-teacher text-indigo-500 text-7xl"></i>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <span className="font-semibold text-indigo-800">Babar Iqbal Awan</span>, Director Lahore College, shares:
              </p>
              <div className="bg-indigo-50 p-6 rounded-xl italic border-l-4 border-indigo-500 text-gray-700">
                "At Lahore College, we believe education goes beyond textbooks. Our mission is to empower students with critical thinking, ethical values, and the skills to thrive in a global society. I invite you to join our community where every student is supported to achieve their highest potential. Together, we shape a brighter future."
              </div>
              <p className="mt-4 text-gray-600">— With over 20 years in academia, Prof. Babar Iqbal Awan has transformed the college into a center of excellence.</p>
            </div>
          </div>
        </section>

        {/* Admission Form Section */}
        <section id="admission" className="scroll-mt-20 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <i className="fas fa-pen-alt text-indigo-600 mr-3"></i> Request Admission Information
          </h2>
          <p className="text-gray-600 mb-8">Fill out the form below and our admissions office will contact you shortly.</p>
          
          {formSubmitted && (
            <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Thank you!</strong>
              <span className="block sm:inline"> We have received your inquiry. We'll get back to you soon.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition"
                placeholder="Muhammad Ali" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition"
                placeholder="ali@example.com" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition"
                placeholder="+92 300 1234567" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="program">Program of Interest *</label>
              <select 
                id="program" 
                name="program" 
                value={formData.program} 
                onChange={handleInputChange} 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition bg-white"
              >
                <option value="fsc-medical">FSC-Medical</option>
                <option value="fsc-engineering">FSC-Engineering</option>
                <option value="ics-cs">ICS-Computer Science</option>
                <option value="arts">Humanities & Arts</option>
                <option value="adp">ADP-2 Years</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200 transform hover:scale-[1.02]"
              >
                <i className="fas fa-paper-plane mr-2"></i> Submit Inquiry
              </button>
            </div>
          </form>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-address-card text-indigo-600 mr-3"></i> Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-2xl mb-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Campus</h3>
              <p className="text-gray-600">7-A, Guldasht Town, Zarar Shaheed Road, Lahore, Punjab 54000, Pakistan</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-2xl mb-3">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
              <p className="text-gray-600">+92 334 7895390</p>
              <p className="text-gray-600">+92 42 111 222 334</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-2xl mb-3">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
              <p className="text-gray-600">info@lahorecollege.edu.pk</p>
              <p className="text-gray-600">admissions@lahorecollege.edu.pk</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-100 p-5 rounded-lg text-center text-gray-700">
            <i className="fas fa-clock text-indigo-600 mr-2"></i> Office hours: Mon-Fri 9:00 AM - 5:00 PM
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold flex items-center mb-4">
                <i className="fas fa-university mr-2 text-indigo-400"></i> Lahore College
              </h3>
              <p className="text-gray-400 text-sm">Empowering minds, transforming futures. Recognized as one of the top institutions in the region.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-indigo-300 transition">Home</a></li>
                <li><a href="#director" className="hover:text-indigo-300 transition">Director's Message</a></li>
                <li><a href="#admission" className="hover:text-indigo-300 transition">Admission</a></li>
                <li><a href="#contact" className="hover:text-indigo-300 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Programs</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>FSC-Medical</li>
                <li>FSC-Engineering</li>
                <li>ICS-Computer Science</li>
                <li>Humanities & Arts</li>
                <li>ADP-2 Years</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition"><i className="fab fa-linkedin"></i></a>
              </div>
              <p className="text-gray-400 text-sm mt-4">© {new Date().getFullYear()} Lahore College. All rights reserved.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
            Developed by Almaco |+92 309 7876 497
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App