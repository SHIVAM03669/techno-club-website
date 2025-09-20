import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Target, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'We prioritize environmental consciousness in every project and initiative we undertake.',
      color: 'text-electric-green'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Pushing boundaries with cutting-edge technology solutions that make a real difference.',
      color: 'text-neon-blue'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Building strong partnerships and fostering teamwork across disciplines and backgrounds.',
      color: 'text-tech-purple'
    },
    {
      icon: Target,
      title: 'Impact Focused',
      description: 'Every project is designed to create measurable positive impact on our community and environment.',
      color: 'text-yellow-400'
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
            About TSCC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            The Techno Smart Campus Club is more than just a student organization—we're a movement of passionate innovators dedicated to creating a sustainable future through technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-electric-green/10 to-neon-blue/5 p-8 rounded-2xl border border-electric-green/20"
            >
              <Target className="w-12 h-12 text-electric-green mb-6" />
              <h2 className="font-orbitron font-bold text-3xl text-electric-green mb-6">Our Mission</h2>
              <p className="font-poppins text-gray-300 text-lg leading-relaxed">
                To foster a community of innovative thinkers who leverage cutting-edge technology to address environmental challenges and create sustainable solutions for a better tomorrow. We believe that the fusion of technology and environmental consciousness is key to solving the world's most pressing problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-neon-blue/10 to-tech-purple/5 p-8 rounded-2xl border border-neon-blue/20"
            >
              <Globe className="w-12 h-12 text-neon-blue mb-6" />
              <h2 className="font-orbitron font-bold text-3xl text-neon-blue mb-6">Our Vision</h2>
              <p className="font-poppins text-gray-300 text-lg leading-relaxed">
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
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
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
                <div className="bg-slate-800/50 p-8 rounded-xl border border-gray-700 hover:border-electric-green/50 transition-all duration-300 h-full">
                  <value.icon className={`w-12 h-12 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-orbitron font-semibold text-2xl text-glow-white mb-4 group-hover:text-electric-green transition-colors">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-electric-green bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
              Key milestones and achievements that have shaped TSC into what it is today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-green via-neon-blue to-tech-purple"></div>

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
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-electric-green to-neon-blue rounded-full border-4 border-dark-bg"></div>

                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-neon-blue/50 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <Award className="w-5 h-5 text-electric-green mr-3" />
                        <span className="font-orbitron font-bold text-electric-green bg-dark-bg px-3 py-1 rounded-full text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-semibold text-xl text-glow-white mb-2">
                        {milestone.event}
                      </h3>
                      <p className="font-poppins text-gray-400">
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
};

export default About;