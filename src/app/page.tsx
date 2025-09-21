"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Facebook, Twitter, Mail, Smartphone, Target, Globe } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hplant.jpg')", // keep your file in /public/bgheader.jpg
        }}
      >
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center -z-10 bg-[#fefae0]"/>

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-6 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-[#81ff00]">TECHNO</span>{" "}
            <span className="text-white">SMART</span>{" "}
            <span className="text-white">CAMPUS</span>{" "}
            <span className="text-[#81ff00]">CLUB</span>
          </h1>

          <p className="text-xl text-gray-200">Ecofriendly Innovation Starts Here</p>
          <p className="text-lg text-gray-300">Presented by MIT Art, Design & Technology University</p>

          <Link href="/home">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#81ff00] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a6d42b] transition-colors flex items-center gap-2 mx-auto"
            >
              Enter
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>


      {/* About/Mission/Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f1de]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About TSCC */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* --- Original Icon Illustration --- */}
              <div className="w-16 h-16 bg-[#81ff00] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">About TSCC</h3>
              <p className="text-gray-600 leading-relaxed">
                The Techno Smart Campus Club is more than just a student organization—we're a movement of passionate innovators dedicated to creating a sustainable future through technology.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              {/* --- Original Icon Illustration --- */}
              <div className="w-16 h-16 bg-[#81ff00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To foster a community of innovative thinkers who leverage cutting-edge technology to address environmental challenges and create sustainable solutions for a better tomorrow.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              {/* --- Original Icon Illustration --- */}
              <div className="w-16 h-16 bg-[#81ff00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading force in sustainable technology innovation at MIT ADT University and beyond. We envision a future where every technological advancement contributes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transform Curiosity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Transform curiosity into action – join the{" "}
                <span className="text-[#81ff00]">Techno Smart</span>{" "}
                Campus Club and unlock endless opportunities.
              </h2>
              <p className="text-lg text-gray-600">
                A student-driven community to explore technology, build projects, and collaborate through workshops, events, and innovation challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#81ff00] rounded-full"></div>
                  <span className="text-gray-600">Participate in hands-on workshops and tech bootcamps</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#81ff00] rounded-full"></div>
                  <span className="text-gray-600">Build real-world projects with guidance and teamwork</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#81ff00] rounded-full"></div>
                  <span className="text-gray-600">Compete in hackathons and innovation challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#81ff00] rounded-full"></div>
                  <span className="text-gray-600">Network with peers, mentors, and industry experts</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              {/* --- IMAGE REPLACEMENT --- */}
              <img 
                src="/curiosity.jpg" 
                alt="Students in a workshop" 
                className="w-full max-w-md h-auto object-cover rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join the Club Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fefae0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              {/* --- IMAGE REPLACEMENT --- */}
              <img 
                src="/join.jpg" 
                alt="Club members collaborating" 
                className="w-full max-w-md h-auto object-cover rounded-3xl shadow-lg"
              />
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Join the Techno Smart{" "}
                <span className="text-[#81ff00]">Campus Club</span>{" "}
                – where learning, building, and innovation come alive.
              </h2>
              <p className="text-lg text-gray-600">
                A student-driven community that empowers you to explore technology, build impactful projects, and grow your skills through collaboration and innovation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#81ff00] mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Hands-on Workshops</span>
                    <span className="text-gray-600"> – Gain practical skills in coding, design, and new tech</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#81ff00] mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Hackathons & Events</span>
                    <span className="text-gray-600"> - Compete, collaborate, and showcase your talent</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#81ff00] mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Networking & Mentorship</span>
                    <span className="text-gray-600"> - Connect with peers, seniors, and industry experts</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <p className="text-gray-600 mb-4 italic">
                "The club provided me with hands-on experience in coding and problem-solving that I couldn't get anywhere else."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#81ff00]">Aditi Sharma</p>
                  <p className="text-sm text-gray-500">3rd Year, CSE</p>
                </div>
                <div className="flex space-x-2">
                  <Facebook className="w-5 h-5 text-[#81ff00]" />
                  <Twitter className="w-5 h-5 text-[#81ff00]" />
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <p className="text-gray-600 mb-4 italic">
                "The hackathons and mentorship programs boosted my confidence and helped me land my dream internship."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#81ff00]">Rohan Verma</p>
                  <p className="text-sm text-gray-500">4th Year, IT</p>
                </div>
                <div className="flex space-x-2">
                  <Facebook className="w-5 h-5 text-[#81ff00]" />
                  <Twitter className="w-5 h-5 text-[#81ff00]" />
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <p className="text-gray-600 mb-4 italic">
                "Being part of this community taught me collaboration, leadership, and the power of innovation."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#81ff00]">Neha Gupta</p>
                  <p className="text-sm text-gray-500">2nd Year, ECE</p>
                </div>
                <div className="flex space-x-2">
                  <Facebook className="w-5 h-5 text-[#81ff00]" />
                  <Twitter className="w-5 h-5 text-[#81ff00]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fefae0]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions about the Techno Smart Campus Club? Here are quick answers to help you get started.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              "Who can join the Techno Smart Campus Club?",
              "Do I need prior technical knowledge to join?",
              "What kind of activities does the club organize?",
              "Is there any membership fee?",
              "How can I join the club?"
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#81ff00] transition-colors cursor-pointer flex items-center justify-between"
              >
                <span className="text-gray-600">{question}</span>
                <ArrowRight className="w-5 h-5 text-[#81ff00]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}