"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, Award } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Induction Ceremony',
      date: '2024-09-08',
      time: '10:00 AM - 12:00 PM',
      location: 'MIT ADT University Main Hall',
      description: 'Welcome ceremony for new members joining TSC. Orientation about club activities and goals for the academic year.',
      attendees: '100+',
      type: 'Ceremony',
      status: 'registration-open',
      image: '/Induction Ceremony.jpg'
    },
    {
      title: 'Online Tech Talk Series',
      date: '2024-09-20',
      time: '06:00 PM - 08:00 PM',
      location: 'Virtual Event',
      description: 'Interactive online session featuring industry experts discussing emerging technologies and sustainability.',
      attendees: '200+',
      type: 'Webinar',
      status: 'registration-open',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'Plogging Event',
      date: '2024-09-24',
      time: '07:00 AM - 09:00 AM',
      location: 'Campus Grounds',
      description: 'Combine jogging with picking up litter! Join us for a morning of fitness and environmental cleanup around campus.',
      attendees: '50+',
      type: 'Community Service',
      status: 'registration-open',
      image: '/Einfochips.jpg'
    },
    {
      title: 'Waste Segregation Workshop',
      date: '2025-01-20',
      time: '03:00 PM - 05:00 PM',
      location: 'Environmental Science Lab',
      description: 'Learn proper waste segregation techniques and understand the importance of recycling for sustainable living.',
      attendees: '40',
      type: 'Workshop',
      status: 'coming-soon',
      image: '/EWASTE.jpg'
    },
    {
      title: 'Hivre Bajar Market Visit',
      date: '2025-01-23',
      time: '09:00 AM - 01:00 PM',
      location: 'Hivre Bajar Market',
      description: 'Field visit to understand local market dynamics and explore sustainable business practices in traditional markets.',
      attendees: '30',
      type: 'Field Visit',
      status: 'coming-soon',
      image: '/visit1.jpeg'
    },
    {
      title: 'EduVision Conference',
      date: '2025-02-02',
      time: '09:00 AM - 05:00 PM',
      location: 'Conference Hall',
      description: 'Annual education conference focusing on innovative teaching methods and educational technology advancements.',
      attendees: '300+',
      type: 'Conference',
      status: 'coming-soon',
      image: 'visit2.jpeg'
    },
    {
      title: 'Green Footsteps Walking Rally',
      date: '2025-02-06',
      time: '06:30 AM - 08:30 AM',
      location: 'Campus to City Center',
      description: 'Awareness walk promoting eco-friendly transportation and healthy lifestyle choices for sustainable living.',
      attendees: '150+',
      type: 'Awareness Rally',
      status: 'coming-soon',
      image: 'visit4.jpeg'
    }
  ];

  const pastEvents = [
    {
      title: 'EWaste Collection Drive',
      date: '2025-03-28',
      attendees: '30+',
      description: 'Successful drive collecting over 10 kg of electronic waste for proper recycling.',
      achievements: ['10 kg E-Waste Collected', 'Community Participation', 'Partnership with Local Recycler'],
      image: '/EWASTE.jpg'
    },
    {
      title: 'Einfochips Visit',
      date: '2025-01-09',
      attendees: '50+',
      description: 'Educational visit to Einfochips to learn about cutting-edge technology and innovation in the tech industry.',
      achievements: ['150+ Participants', 'Industry Insights', 'Networking Opportunities'],
      image: '/Einfochips.jpg'
    },
    {
      title:"ISRO Visit",
      date:'2025-01-08',
      attendees: '50+',
      description: 'Inspiring visit to ISRO to explore advancements in space technology and research.',
      achievements: ['Exclusive Tour', 'Expert Talks', 'Hands-on Experience'],
      image: '/ISRO visit 2.jpg'
    }
  ];

  return (
    <div
    className="min-h-screen pt-20 bg-cover bg-center"
    style={{ backgroundImage: "url('/event.jpg')" }}
  >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-4xl md:text-6xl mb-6 text-slate-900"
          >
           <span className='text-[#81ff00]'> Events </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            <span className='text-white'>Join us for exciting events, workshops, and competitions that drive sustainable innovation</span>  
          </motion.p>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-slate-900">
            <span className='text-[#81ff00]'> Upcoming Events </span>
            </h2>
            <p className="text-lg text-slate-600">
            <span className='text-white'>Don't miss these exciting opportunities to learn, network, and innovate</span>
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1">
                      <div className="h-64 lg:h-full relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === 'registration-open' 
                              ? 'bg-green-500 text-slate-900' 
                              : 'bg-yellow-500 text-slate-900'
                          }`}>
                            {event.status === 'registration-open' ? 'Registration Open' : 'Coming Soon'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-sm font-medium rounded-full border border-blue-500/30 mr-3">
                          {event.type}
                        </span>
                        <div className="flex items-center text-slate-500 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees} attendees
                        </div>
                      </div>

                      <h3 className="font-bold text-2xl md:text-3xl text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-slate-500">
                          <Calendar className="w-5 h-5 mr-3 text-green-500" />
                          <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-slate-500">
                          <Clock className="w-5 h-5 mr-3 text-blue-500" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-slate-500">
                          <MapPin className="w-5 h-5 mr-3 text-purple-500" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                          event.status === 'registration-open'
                            ? 'bg-gradient-to-r from-green-500 to-blue-500 text-slate-900 hover:from-blue-500 hover:to-purple-500'
                            : 'bg-slate-700 text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={event.status !== 'registration-open'}
                      >
                        <span>{event.status === 'registration-open' ? 'Register Now' : 'Coming Soon'}</span>
                        {event.status === 'registration-open' && <ArrowRight className="w-4 h-4" />}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-slate-900">
            <span className='text-[#81ff00]'>Past Events</span>
            </h2>
            <p className="text-lg text-slate-600">
            <span className='text-white'>Celebrating our successful events and their achievements</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-gray-200 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-slate-900/80 px-3 py-1 rounded-full">
                        <Users className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-white text-sm font-medium">{event.attendees}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm text-slate-500">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-slate-500 text-xs">
                            <Award className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
              </motion.div>
        ))}
      </div>
        </div>
      </section>
    </div>
  );
}