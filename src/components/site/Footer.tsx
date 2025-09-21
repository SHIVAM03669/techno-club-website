"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Bottom CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400">Empowering Students Through Technology & Innovation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join the Techno Smart Campus Club and turn your ideas into reality
            </h2>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#81ff00] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a6d42b] transition-colors flex items-center gap-2 mx-auto"
              >
                JOIN
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* TSCC Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#81ff00] rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-white">TECHNO CLUB</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AI solutions delivered in 72 hours. Enterprise systems built for real business impact.
              </p>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-[#81ff00]" />
                <span className="text-gray-300 text-sm">Follow us on LinkedIn</span>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/events" className="hover:text-[#81ff00] transition-colors">Workshops</Link></li>
                <li><Link href="/events" className="hover:text-[#81ff00] transition-colors">Hackathons</Link></li>
                <li><Link href="/articles" className="hover:text-[#81ff00] transition-colors">Research Projects</Link></li>
                <li><Link href="/memories" className="hover:text-[#81ff00] transition-colors">Community Events</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-[#81ff00] transition-colors">About Us</Link></li>
                <li><Link href="/members" className="hover:text-[#81ff00] transition-colors">Our Team</Link></li>
                <li><Link href="/memories" className="hover:text-[#81ff00] transition-colors">Success Stories</Link></li>
                <li><Link href="/events" className="hover:text-[#81ff00] transition-colors">Events</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#81ff00]" />
                  <span>contact@technoclub.edu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#81ff00]" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#81ff00]" />
                  <span>MIT ADT University • Pune • India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Techno Smart Campus Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}