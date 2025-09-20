import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ExternalLink } from 'lucide-react';

const Feedback: React.FC = () => {
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
            Feedback
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Help us improve by sharing your thoughts and experiences with TSC
          </motion.p>
        </div>
      </motion.section>

      {/* Feedback Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/30 rounded-2xl border border-gray-700 p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="font-orbitron font-bold text-2xl text-electric-green mb-4 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 mr-3" />
                Share Your Feedback
              </h2>
              <p className="font-poppins text-gray-300 mb-6">
                Your feedback is valuable to us! Please take a moment to fill out our feedback form.
              </p>
              
              {/* Google Form Link */}
              <a 
                href="https://forms.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg font-orbitron font-bold rounded-full hover:from-neon-blue hover:to-electric-green transition-all duration-300 shadow-glow-md"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Feedback Form
              </a>
            </div>

            {/* Recruitment Timing */}
            <div className="mt-16 bg-slate-700/30 rounded-xl border border-gray-600 p-6">
              <h3 className="font-orbitron font-bold text-xl text-neon-blue mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                Recruitment Timeline
              </h3>
              <p className="font-poppins text-gray-300 mb-6">
                Interested in joining our team? Our next recruitment period is coming soon!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-electric-green mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-glow-white">Applications Open</h4>
                    <p className="font-poppins text-gray-400">Coming Soon - Stay Tuned!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-neon-blue mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-glow-white">Interview Process</h4>
                    <p className="font-poppins text-gray-400">To be announced</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-tech-purple mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-glow-white">Final Selection</h4>
                    <p className="font-poppins text-gray-400">To be announced</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-neon-blue/20">
                <p className="font-poppins text-gray-300 text-sm">
                  <span className="text-neon-blue font-semibold">Note:</span> Follow our social media channels and website for the latest updates on recruitment dates and application process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;