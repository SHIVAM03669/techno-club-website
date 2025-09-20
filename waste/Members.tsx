import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Mail, Linkedin,BookOpen, GraduationCap, History } from 'lucide-react';
import {
  parissaTech,
  gursimran,
  raj,
  samarth,
  yug,
  tanmayKulkarni,
  rajaniMam
} from '../assets/images';

const Members: React.FC = () => {
  const coreTeam = [
    {
      name: 'Parissa Dilip Matey',
      role: 'President',
      image: parissaTech,
      expertise: 'Mental Health,Community Well being',
      department: 'Bsc Psychology (Hons)',
      bio: 'Passionate about mental health, healing and community well being, I strive to combine leadership with advocacy to create lasting impact.',
      achievements: ['Best Psychology Student and woman wellness coach of India - By Emocare and GTCCO',
         'Ambassador of Peace - By 10th World Parliament of Science, Spirituality/Religion and Philosophy', 
         'English Marathon Exam - State level Merit holder'],
      social: { email: 'parissathealchemist.work@gmail.com', linkedin: 'https://www.linkedin.com/in/parissa-dilip-b7a3082ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
    },
    {
      name: 'Gursimran Singh Saini',
      role: 'Vice President',
      image: gursimran,
      expertise: 'Cybersecurity, IoT ,Bike Riding',
      department: 'Information Technology Engineering',
      bio: ' Beyond academics,passionate about gaming and traveling on two wheels to explore new horizons and cultures.',
      achievements: ['2 year State Level Football Champion', 'Won a Solothon in BURPSUITE'],
      social: { email: 'gursimransinghsaini81@gmail.com', linkedin: 'http://www.linkedin.com/in/gursimran-singh-saini-786b0028b' }
    },
    {
      name: 'Raj Jagesh Sharma',
      role: 'Community Manager',
      image: raj,
      expertise: 'CyberSecurity',
      department: 'Computer Science Engineering',
      social: { email:'',Linkedin:''}
    },
    {
      name: 'Samarth Agrawal',
      role: 'Secretary',
      image: samarth,
      expertise: 'Climate Tech',
      department: 'Computer Science Engineering',
      social: { email:'samarthagarwal.413@gmail.com',Linkedin:'https://www.linkedin.com/in/samarth-agarwal-6693641b3' }
    },
    {
      name: 'Yug Patel',
      role: 'Treasurer',
      image: yug,
      expertise: 'Community Building',
      department: 'Computer Science Engineering'
    }
  ];

  const exMembers = [
    {
      name: 'Tanmay Kulkarni',
      role: 'Former Content Member',
      image: tanmayKulkarni,
      expertise: 'Renewable Energy',
      achievements: ['Developed TSC’s first content strategy', 'Led 2 successful campaigns on social media'],
      currentPosition: 'Advisory Board Member at TSC'
    },
    {
      name: 'Gourav Singar',
      role: 'Former Promotions Lead',
      image: 'https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', // Placeholder for Gourav Singar
      expertise: 'DevOps and Cloud Computing',
      achievements: ['Developed TSC web platform', 'Led 3 hackathons'],
      currentPosition: 'Software Architect at Microsoft'
    }
  ];

  const faculty = [
    {
      name: 'Prof.Rajani Sajjan',
      role: 'Technical Mentor',
      image: rajaniMam,
      expertise: 'IoT Systems',
      department: 'CSE-CLoud Computing',
      bio: 'Associate Professor at MIT ADT University | AWS Certified | Azure Certified | Trainer | Mentor',
      achievements: ['IEEE Senior Member', 'Smart City Project Lead', 'Developed 5 patented IoT solutions']
    }
  ];

  const hod = {
    name: 'Dr.Shraddha Phansalkar',
    role: 'Head of Department',
    image: 'https://imgs.search.brave.com/EIjpB4rFeMqpSXhRRYoXMkmoQtHZExKXTHp-buKjAgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMmdq/cWg5ajI2dW5wMC5j/bG91ZGZyb250Lm5l/dC9wcm9maWxlcGlj/L2E4ODYxMmUwOTJl/N2IyMDJlMGMxMDVm/ODUwMDdlZWYx',
    expertise: 'Computer Science & Engineering',
    department: 'School of Technology',
    bio: 'Academic Leader, Educator, Blockchain Certified professional, AI Researcher',
    achievements: ['Ph.D. from MIT', 'Author of "Sustainable Computing in the 21st Century"', 'Recipient of National Science Award'],
    social: { email: 'shraddha.phansalkar@mituniversity.edu.in', linkedin: 'https://www.linkedin.com/in/dr-shraddha-phansalkar-9210093b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxuM6wGo9T0K%2FH3FzKW9yUQ%3D%3D' }
  };


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
            className="font-orbitron font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-neon-blue via-electric-green to-neon-blue bg-clip-text text-transparent"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the brilliant minds driving innovation and sustainability at TSC
          </motion.p>
        </div>
      </motion.section>

      {/* Head of Department */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-neon-blue bg-clip-text text-transparent">
              Head of Department
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-tech-purple/5 to-neon-blue/5 p-8 rounded-2xl border border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                  <div className="relative mb-4 md:mb-0 md:mr-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-tech-purple/50 group-hover:border-tech-purple transition-colors">
                      <img
                        src={hod.image}
                        alt={hod.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-tech-purple to-neon-blue p-2 rounded-full">
                      <GraduationCap className="w-4 h-4 text-dark-bg" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-tech-purple transition-colors">
                      {hod.name}
                    </h3>
                    <p className="font-poppins font-semibold text-tech-purple mb-2 text-lg">
                      {hod.role}
                    </p>
                    <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-sm font-medium rounded-full border border-tech-purple/30 mb-4">
                      {hod.expertise}
                    </span>
                  </div>
                </div>

                {hod.bio && (
                  <p className="font-poppins text-gray-400 mb-6 leading-relaxed">
                    {hod.bio}
                  </p>
                )}

                {hod.achievements && (
                  <div className="mb-6">
                    <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {hod.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <Award className="w-4 h-4 text-tech-purple mr-3 flex-shrink-0" />
                          <span className="font-poppins text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hod.social && (
                  <div className="flex space-x-4">
                    {hod.social.email && (
                      <a href={`mailto:${hod.social.email}`} className="p-2 bg-slate-800 rounded-lg hover:bg-tech-purple/20 transition-colors">
                        <Mail className="w-5 h-5 text-tech-purple" />
                      </a>
                    )}
                    {hod.social.linkedin && (
                      <a href={hod.social.linkedin} className="p-2 bg-slate-800 rounded-lg hover:bg-neon-blue/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-neon-blue" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-neon-blue to-electric-green bg-clip-text text-transparent">
              Faculty Advisors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:place-items-center">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group lg:col-span-2 lg:max-w-2xl"
              >
                <div className="bg-gradient-to-br from-neon-blue/5 to-electric-green/5 p-8 rounded-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-neon-blue/50 group-hover:border-neon-blue transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-electric-green to-neon-blue p-2 rounded-full">
                        <BookOpen className="w-4 h-4 text-dark-bg" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-poppins font-semibold text-neon-blue mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-electric-green/20 text-electric-green text-sm font-medium rounded-full border border-electric-green/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.bio && (
                    <p className="font-poppins text-gray-400 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  <div className="mb-4">
                    <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Department</h4>
                    <p className="font-poppins text-gray-400">
                      <GraduationCap className="w-4 h-4 text-electric-green inline mr-2" />
                      {member.department}
                    </p>
                  </div>

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 text-electric-green mr-3 flex-shrink-0" />
                            <span className="font-poppins text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Core Team
            </h2>
          </motion.div>

          {/* Leadership Team - Upper Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {coreTeam.filter(member => 
              member.name === 'Parissa Dilip Matey' || member.name === 'Gursimran Singh Saini'
            ).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center mb-6">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-neon-blue/50 group-hover:border-neon-blue transition-colors mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-orbitron font-semibold text-xl text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-poppins font-medium text-electric-green mb-2 text-lg">
                      {member.role}
                    </p>
                    <p className="font-poppins text-sm text-gray-400 mb-3">
                      {member.department}
                    </p>
                    <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-xs font-medium rounded-full border border-tech-purple/30">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Members - Lower Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeam.filter(member => 
              member.name !== 'Parissa Dilip Matey' && member.name !== 'Gursimran Singh Saini'
            ).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-neon-blue/50 group-hover:border-neon-blue transition-colors mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-orbitron font-semibold text-lg text-glow-white mb-2 group-hover:text-neon-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-poppins font-medium text-electric-green mb-2">
                      {member.role}
                    </p>
                    <p className="font-poppins text-sm text-gray-400 mb-3">
                      {member.department}
                    </p>
                    <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-xs font-medium rounded-full border border-tech-purple/30">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ex-Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-tech-purple to-neon-blue bg-clip-text text-transparent">
              Alumni Members
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {exMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-tech-purple/5 to-neon-blue/5 p-8 rounded-2xl border border-tech-purple/20 hover:border-tech-purple/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-tech-purple/50 group-hover:border-tech-purple transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-tech-purple to-neon-blue p-2 rounded-full">
                        <History className="w-4 h-4 text-dark-bg" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-orbitron font-bold text-2xl text-glow-white mb-2 group-hover:text-tech-purple transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-poppins font-semibold text-tech-purple mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-tech-purple/20 text-tech-purple text-sm font-medium rounded-full border border-tech-purple/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 text-tech-purple mr-3 flex-shrink-0" />
                            <span className="font-poppins text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-orbitron font-semibold text-lg text-glow-white mb-3">Current Position</h4>
                    <p className="flex items-center text-gray-400">
                      <BookOpen className="w-4 h-4 text-tech-purple mr-3 flex-shrink-0" />
                      <span className="font-poppins text-sm">{member.currentPosition}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-electric-green/10 via-neon-blue/10 to-tech-purple/10 p-12 rounded-2xl border border-electric-green/20">
            <Users className="w-16 h-16 text-electric-green mx-auto mb-6" />
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Ready to Join Our Mission?
            </h2>
            <p className="font-poppins text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future through sustainable technology innovation. Your skills and passion can make a real difference.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg font-orbitron font-semibold text-lg px-8 py-4 rounded-full hover:from-neon-blue hover:to-tech-purple transition-all duration-300"
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Members;