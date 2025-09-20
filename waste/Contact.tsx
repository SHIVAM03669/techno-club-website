import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Users, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@technosmartcampus.club',
      description: 'Get in touch for any inquiries',
      color: 'text-electric-green'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 9325446359',
      description: 'Available during office hours',
      color: 'text-neon-blue'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'MIT ADT University',
      description: 'Loni Kalbhor, Pune, Maharashtra',
      color: 'text-tech-purple'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 4:00 PM',
      color: 'text-yellow-400'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/techno_smart_campus_club/#', color: 'hover:text-pink-400' } ,
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/techno-smart-campus-club-201212328/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOP9HXjZvSR6nyWwpT8aW9g%3D%3D', color: 'hover:text-blue-600' },
   ];

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have questions, ideas, or want to collaborate? We'd love to hear from you!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/30 p-6 rounded-xl border border-gray-700 hover:border-electric-green/50 transition-all duration-300 text-center h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-700 mb-4 group-hover:scale-110 transition-transform ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-lg text-glow-white mb-2 group-hover:text-electric-green transition-colors">
                    {info.title}
                  </h3>
                  <p className="font-poppins font-medium text-gray-300 mb-1">
                    {info.value}
                  </p>
                  <p className="font-poppins text-sm text-gray-500">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-800/30 rounded-2xl border border-gray-700 p-8">
                <h2 className="font-orbitron font-bold text-2xl text-electric-green mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-dark-bg" />
                    </div>
                    <h3 className="font-orbitron font-bold text-xl text-electric-green mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-poppins text-gray-300">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                        />
                      </div>
                      <div>
                        <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                          Email *
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
                    </div>

                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="membership">Club Membership</option>
                        <option value="events">Events & Workshops</option>
                        <option value="projects">Project Partnership</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-lg font-orbitron font-semibold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg hover:from-neon-blue hover:to-tech-purple'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400 mr-3"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </div>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div className="bg-gradient-to-r from-neon-blue/10 to-tech-purple/10 p-8 rounded-2xl border border-neon-blue/20">
                <h3 className="font-orbitron font-bold text-2xl text-neon-blue mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Connect With Us
                </h3>
                <p className="font-poppins text-gray-300 mb-6">
                  Follow us on social media for the latest updates, events, and behind-the-scenes content from TSC.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all duration-300 text-gray-300 ${social.color}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-poppins font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-r from-electric-green/10 to-yellow-400/10 p-8 rounded-2xl border border-electric-green/20">
                <h3 className="font-orbitron font-bold text-2xl text-electric-green mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-glow-white mb-2">
                      How can I join TSC?
                    </h4>
                    <p className="font-poppins text-gray-400 text-sm">
                      Visit our Apply page and fill out the application form. We review applications regularly and welcome passionate students from all disciplines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-glow-white mb-2">
                      Do I need prior experience?
                    </h4>
                    <p className="font-poppins text-gray-400 text-sm">
                      No prior experience is required! We welcome beginners and provide mentorship and training opportunities to help you grow.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-glow-white mb-2">
                      What projects do you work on?
                    </h4>
                    <p className="font-poppins text-gray-400 text-sm">
                      We focus on sustainable technology projects including IoT solutions, AI for environmental monitoring, renewable energy systems, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-slate-800/30 p-8 rounded-2xl border border-gray-700">
                <h3 className="font-orbitron font-bold text-2xl text-tech-purple mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  Find Us
                </h3>
                <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-tech-purple mx-auto mb-2" />
                    <p className="font-poppins text-gray-400">Interactive Map</p>
                    <p className="font-poppins text-sm text-gray-500">MIT ADT University Campus</p>
                  </div>
                </div>
                <p className="font-poppins text-gray-300 text-sm">
                  Located in the heart of MIT ADT University campus, Loni Kalbhor, Pune. Our club office is in the Innovation Hub building.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;