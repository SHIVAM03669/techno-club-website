"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Clock } from 'lucide-react';

export default function MemoriesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      title: 'Induction Ceremony',
      date: '2024-11-18',
      category: 'Induction',
      participants: '150+',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description: 'Welcoming new members to the TSCC family and introducing them to our mission and values.'
    },
    {
      id:2,
      title:"ISRO Visit",
      date:'2025-01-08',
      category:'Exhibition',
      participants:'50+',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description:'A guided tour of ISRO\'s facilities, showcasing India\'s advancements in space technology and sustainable innovations.'
    },
    {
      id:3,
      title:'Amul Factory Visit',
      date:'2025-01-08',
      category:'Field Visit',
      participants:'50+',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description:'Exploring the operations of Amul, India\'s largest dairy cooperative, and learning about sustainable dairy practices.'
    },
    {
      id:4,
      title:'Statue of Unity Visit',
      date:'2025-01-10',
      category:'Field Visit',
      participants:'50+',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description:'A visit to the world\'s tallest statue, learning about its significance and the sustainable practices involved in its construction.'
    },
    {
      id:5,
      title: 'Einfochips Visit',
      date: '2025-01-09',
      category: 'Field Visit',
      participants: '50+',
      image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description: 'A tour of Einfochips, exploring their innovative solutions in electronics and sustainable technology practices.'
    },
    {
      id: 6,
      title:'Orphanage Visit',
      date: '2025-03-29',
      category: 'Social Service',
      participants: '30+',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description: 'Spending quality time with children at a local orphanage, providing support and sharing knowledge on sustainable practices.'
    },
    {
      id: 7,
      title: 'Ewaste Collection Drive',
      date: '2025-03-28',
      category: 'Sustainability',
      participants: '40+',
      image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description:'Collecting E-waste from our campus and having an interactive session on E-waste with external mentor'
    },
    {
      id: 8,
      title:'Ralegan-Siddhi Visit',
      date: '2025-03-21',
      category: 'Field Visit',
      participants: '50+',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      description: 'A visit to Ralegaon Siddhi, a model village in India known for its sustainable practices and community-driven development.'
    }
  ];

  const categories = ['All','Induction Ceremony','ISRO Visit','Amul Factory Visit','Statue of Unity Visit','Einfochips Visit','Orphanage Visit','E-waste Collection Drive'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMemories = selectedCategory === 'All'
    ? memories
    : memories.filter(memory => memory.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredMemories.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredMemories.length) % filteredMemories.length);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            className="font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent"
          >
            Memories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Capturing the moments that define our journey in sustainable innovation
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-green-500 border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredMemories.map((memory, index) => (
                <motion.div
                  key={memory.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium mr-2 ${
                          memory.category === 'Hackathon' ? 'bg-green-500/20 text-green-500 border border-green-500/30' :
                          memory.category === 'Project' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30' :
                          memory.category === 'Workshop' ? 'bg-purple-500/20 text-purple-500 border border-purple-500/30' :
                          'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                        }`}>
                          {memory.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm text-white mb-1 line-clamp-2">
                        {memory.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(memory.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          <span>{memory.participants}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/50 rounded-xl transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl mx-auto px-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              {filteredMemories.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Image and Info */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lg:col-span-2">
                  <img
                    src={filteredMemories[selectedImage].image}
                    alt={filteredMemories[selectedImage].title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                        filteredMemories[selectedImage].category === 'Hackathon' ? 'bg-green-500/20 text-green-500 border border-green-500/30' :
                        filteredMemories[selectedImage].category === 'Project' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30' :
                        filteredMemories[selectedImage].category === 'Workshop' ? 'bg-purple-500/20 text-purple-500 border border-purple-500/30' :
                        'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                      }`}>
                        {filteredMemories[selectedImage].category}
                      </span>
                    </div>
                    <h2 className="font-bold text-2xl md:text-3xl text-white mb-4">
                      {filteredMemories[selectedImage].title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {filteredMemories[selectedImage].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-3 text-green-500" />
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-sm">
                          {new Date(filteredMemories[selectedImage].date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <p className="text-xs text-gray-500">Participants</p>
                        <p className="text-sm">{filteredMemories[selectedImage].participants}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
}