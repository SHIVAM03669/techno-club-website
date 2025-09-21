"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Mail, Linkedin, BookOpen, GraduationCap, History } from 'lucide-react';

const teamMembers = [
  {
    name: 'Parissa Tech',
    role: 'President',
    image: '/parissa tech.jpg',
    email: 'parissa.tech@example.com',
    linkedin: 'https://linkedin.com/in/parissa-tech',
    achievements: ['Led 5+ sustainability projects', 'MIT ADT University Scholar'],
    bio: 'Passionate about environmental technology and sustainable innovation. Leading TSC towards a greener future.',
    year: 'Final Year',
    department: 'Computer Science'
  },
  {
    name: 'Gursimran Singh',
    role: 'Vice President',
    image: '/gursimran.png',
    email: 'gursimran.singh@example.com',
    linkedin: 'https://linkedin.com/in/gursimran-singh',
    achievements: ['Tech Innovation Award 2024', 'Hackathon Winner'],
    bio: 'Expert in emerging technologies and project management. Driving innovation in sustainable tech solutions.',
    year: 'Final Year',
    department: 'Information Technology'
  },
  {
    name: 'Raj Patel',
    role: 'Technical Lead',
    image: '/raj.jpg',
    email: 'raj.patel@example.com',
    linkedin: 'https://linkedin.com/in/raj-patel',
    achievements: ['Open Source Contributor', 'Tech Conference Speaker'],
    bio: 'Full-stack developer with expertise in green technology solutions and sustainable software development.',
    year: 'Third Year',
    department: 'Computer Science'
  },
  {
    name: 'Samarth Sharma',
    role: 'Research Coordinator',
    image: '/samarth.jpg',
    email: 'samarth.sharma@example.com',
    linkedin: 'https://linkedin.com/in/samarth-sharma',
    achievements: ['Research Paper Published', 'Sustainability Research Grant'],
    bio: 'Dedicated researcher in environmental science and sustainable technology applications.',
    year: 'Third Year',
    department: 'Environmental Science'
  },
  {
    name: 'Yug Patel',
    role: 'Events Manager',
    image: '/yug.jpg',
    email: 'yug.patel@example.com',
    linkedin: 'https://linkedin.com/in/yug-patel',
    achievements: ['Event Management Excellence', 'Community Outreach Leader'],
    bio: 'Creative event organizer passionate about bringing people together for environmental causes.',
    year: 'Second Year',
    department: 'Business Administration'
  },
  {
    name: 'Tanmay Kulkarni',
    role: 'Marketing Lead',
    image: '/tanmay kulkarni.jpg',
    email: 'tanmay.kulkarni@example.com',
    linkedin: 'https://linkedin.com/in/tanmay-kulkarni',
    achievements: ['Digital Marketing Certification', 'Brand Strategy Expert'],
    bio: 'Marketing specialist focused on promoting sustainable practices and environmental awareness.',
    year: 'Second Year',
    department: 'Marketing'
  },
  {
    name: 'Dr. Rajani Mam',
    role: 'Faculty Advisor',
    image: '/rajani mam.jpg',
    email: 'rajani.mam@example.com',
    linkedin: 'https://linkedin.com/in/rajani-mam',
    achievements: ['PhD in Environmental Science', '20+ Years Teaching Experience'],
    bio: 'Experienced faculty member guiding students in environmental research and sustainable technology development.',
    year: 'Faculty',
    department: 'Environmental Science'
  }
];

export default function MembersPage() {
  const featured = teamMembers.find((m) => m.name === 'Dr. Rajani Mam');
  const others = teamMembers.filter((m) => m.name !== 'Dr. Rajani Mam');

  return (
    <div
  className="min-h-screen pt-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/members.jpg')" }}
>
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
            className="font-bold text-4xl md:text-6xl mb-6 text-slate-900 text-white"
          >
            Our <span className='text-[#81ff00]'>Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto text-white"
          >
            Meet the passionate individuals driving innovation and sustainability at TSC
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Faculty Advisor */}
      {featured && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/90 rounded-2xl p-6 border border-green-500/30 shadow-md">
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-green-500/50"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-4">{featured.name}</h2>
                <p className="text-green-600 font-semibold">{featured.role}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <GraduationCap className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-500">{featured.year}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">{featured.department}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-center max-w-2xl mx-auto">{featured.bio}</p>
              <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-gray-200">
                <a href={`mailto:${featured.email}`} className="p-2 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition">
                  <Mail className="w-4 h-4 text-green-600" />
                </a>
                <a href={featured.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Team Members Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-green-500/30 group-hover:border-green-500 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-4 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <GraduationCap className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-500">{member.year}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-500">{member.department}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  
                  <div>
                    <h4 className="text-green-600 font-medium mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-all duration-300 group"
                    >
                      <Mail className="w-4 h-4 text-green-600 group-hover:text-green-700" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-all duration-300 group"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fefae0]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-green-500/20 rounded-2xl p-6 border border-green-500/30">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-slate-900 mb-2">50+</h3>
                <p className="text-slate-600">Active Members</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="bg-blue-500/20 rounded-2xl p-6 border border-blue-500/30">
                <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-slate-900 mb-2">15+</h3>
                <p className="text-slate-600">Research Projects</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-purple-500/20 rounded-2xl p-6 border border-purple-500/30">
                <History className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-slate-900 mb-2">3+</h3>
                <p className="text-slate-600">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}