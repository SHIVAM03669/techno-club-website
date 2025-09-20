import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, GraduationCap, Code, Lightbulb, FileText } from 'lucide-react';

const Apply: React.FC = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    year: string;
    department: string;
    skills: string[];
    interests: string[];
    experience: string;
    motivation: string;
    portfolio: string;
    availability: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    year: '',
    department: '',
    skills: [],
    interests: [],
    experience: '',
    motivation: '',
    portfolio: '',
    availability: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const skillOptions = [
    'JavaScript', 'Python', 'React', 'Node.js', 'AI/ML', 'IoT', 'Robotics', 
    'Data Science', 'Blockchain', 'Mobile Development', 'UI/UX Design', 'Arduino'
  ];

  const interestOptions = [
    'Renewable Energy', 'Smart Cities', 'Climate Tech', 'Green Computing', 
    'Sustainable Agriculture', 'Clean Water Tech', 'Environmental Monitoring', 
    'Carbon Capture', 'Circular Economy', 'Biodiversity Tech'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (category: 'skills' | 'interests', value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-dark-bg via-slate-900 to-dark-bg flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-electric-green/10 via-neon-blue/10 to-tech-purple/10 p-12 rounded-2xl border border-electric-green/20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-r from-electric-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Send className="w-10 h-10 text-dark-bg" />
            </motion.div>
            <h1 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Application Submitted!
            </h1>
            <p className="font-poppins text-lg text-gray-300 mb-8">
              Thank you for your interest in joining TSC. We've received your application and will review it carefully. 
              You can expect to hear from us within the next 7-10 business days.
            </p>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-neon-blue/20">
              <h3 className="font-orbitron font-semibold text-xl text-neon-blue mb-4">What's Next?</h3>
              <ul className="text-left space-y-3 font-poppins text-gray-300">
                <li>• Initial application review (3-5 days)</li>
                <li>• Technical interview with our core team</li>
                <li>• Final interview and club orientation</li>
                <li>• Welcome to the TSC family!</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-dark-bg via-slate-900 to-dark-bg">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-electric-green via-neon-blue to-electric-green bg-clip-text text-transparent"
          >
            Join TSC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to be part of the sustainable technology revolution? Apply now and help us build a greener future!
          </motion.p>
        </div>
      </motion.section>

      {/* Application Form */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/30 rounded-2xl border border-gray-700 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="font-orbitron font-bold text-2xl text-electric-green mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h2 className="font-orbitron font-bold text-2xl text-neon-blue mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Academic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Year of Study *
                    </label>
                    <select
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue text-glow-white font-poppins"
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Masters">Masters</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Department *
                    </label>
                    <input
                      type="text"
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="e.g. Computer Science, Environmental Engineering"
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue text-glow-white font-poppins"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="font-orbitron font-bold text-2xl text-tech-purple mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Technical Skills
                </h2>
                <p className="font-poppins text-gray-400 mb-4">Select all skills that apply to you:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skillOptions.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleMultiSelect('skills', skill)}
                      className={`p-3 rounded-lg text-sm font-poppins font-medium transition-all duration-300 ${
                        formData.skills.includes(skill)
                          ? 'bg-gradient-to-r from-tech-purple to-electric-green text-dark-bg'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600 border border-gray-600'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h2 className="font-orbitron font-bold text-2xl text-yellow-400 mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Areas of Interest
                </h2>
                <p className="font-poppins text-gray-400 mb-4">What sustainability areas interest you most?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleMultiSelect('interests', interest)}
                      className={`p-3 rounded-lg text-sm font-poppins font-medium transition-all duration-300 ${
                        formData.interests.includes(interest)
                          ? 'bg-gradient-to-r from-yellow-400 to-electric-green text-dark-bg'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600 border border-gray-600'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience & Motivation */}
              <div>
                <h2 className="font-orbitron font-bold text-2xl text-electric-green mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Tell Us More
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Previous Experience (Projects, Internships, etc.)
                    </label>
                    <textarea
                      name="experience"
                      rows={4}
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Describe any relevant experience, projects, or activities..."
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Why do you want to join TSC? *
                    </label>
                    <textarea
                      name="motivation"
                      rows={4}
                      required
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Tell us what motivates you to join our sustainable technology mission..."
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Portfolio/GitHub/LinkedIn (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://your-portfolio.com or https://github.com/username"
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                      Availability *
                    </label>
                    <select
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                    >
                      <option value="">Select your availability</option>
                      <option value="2-5 hours/week">2-5 hours per week</option>
                      <option value="5-10 hours/week">5-10 hours per week</option>
                      <option value="10+ hours/week">10+ hours per week</option>
                      <option value="Weekends only">Weekends only</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full py-4 rounded-lg font-orbitron font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg hover:from-neon-blue hover:to-tech-purple'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400 mr-3"></div>
                    Submitting Application...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-3" />
                    Submit Application
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Apply;