"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Target, Users, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'We prioritize environmental consciousness in every project and initiative we undertake.',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Pushing boundaries with cutting-edge technology solutions that make a real difference.',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Building strong partnerships and fostering teamwork across disciplines and backgrounds.',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      title: 'Impact Focused',
      description: 'Every project is designed to create measurable positive impact on our community and environment.',
      color: 'text-yellow-500'
    }
  ];

  const milestones = [
    { year: '2022', event: 'Club Foundation', description: 'TSC was established with 15 founding members' },
    { year: '2022', event: 'First Project', description: 'Launched smart energy monitoring system' },
    { year: '2023', event: 'Major Achievement', description: 'Won National Green Tech Innovation Award' },
    { year: '2023', event: 'Expansion', description: 'Grew to 150+ active members' },
    { year: '2024', event: 'Partnership', description: 'Collaborated with 5+ industry partners' },
    { year: '2024', event: 'Impact Milestone', description: 'Achieved 50% campus energy reduction' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#101828]">
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
            className="font-bold text-4xl md:text-6xl mb-6 text-slate-900"
          >
            <span className='text-[#81ff00]'>About TSCC</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-white"
          >
            The Techno Smart Campus Club is more than just a student organization—we're a movement of passionate innovators dedicated to creating a sustainable future through technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fefae0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <Target className="w-12 h-12 text-green-500 mb-6" />
              <h2 className="font-bold text-3xl text-green-500 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To foster a community of innovative thinkers who leverage cutting-edge technology to address environmental challenges and create sustainable solutions for a better tomorrow. We believe that the fusion of technology and environmental consciousness is key to solving the world's most pressing problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <Globe className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="font-bold text-3xl text-blue-500 mb-6">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become the leading force in sustainable technology innovation at MIT ADT University and beyond. We envision a future where every technological advancement contributes to environmental preservation and social good, creating a lasting positive impact on our planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-slate-900">
            <span className='text-[#81ff00]'>Our Core Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto text-white">
              The principles that guide every decision, project, and interaction within our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 h-full">
                  <value.icon className={`w-12 h-12 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-2xl text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fefae0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-slate-900">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Key milestones and achievements that have shaped TSC into what it is today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-slate-900"></div>

                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <Award className="w-5 h-5 text-green-500 mr-3" />
                        <span className="font-bold text-green-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-semibold text-xl text-slate-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-slate-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
        ))}
      </div>
          </div>
        </div>
      </section>
    </div>
  );
}