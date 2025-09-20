import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Tag, Clock } from 'lucide-react';

const Articles: React.FC = () => {
  const articles = [
    {
      title: 'The Future of Sustainable AI: How Machine Learning Can Save Our Planet',
      excerpt: 'Exploring the intersection of artificial intelligence and environmental conservation, and how smart algorithms are revolutionizing sustainability efforts worldwide.',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Environment',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      link: '#',
      featured: true
    },
    {
      title: 'IoT Sensors: Building Smart Cities That Actually Work',
      excerpt: 'A deep dive into how Internet of Things technology is transforming urban infrastructure and creating more livable, efficient cities.',
      author: 'Maya Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'IoT',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      link: '#'
    },
    {
      title: 'Green Energy Revolution: Solar Tech Innovations in 2024',
      excerpt: 'Latest breakthroughs in solar technology and how new innovations are making renewable energy more accessible and efficient.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Renewable Energy',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      link: '#'
    },
    {
      title: 'Robotics in Environmental Conservation: Automating Green Solutions',
      excerpt: 'How robotics and automation are being deployed to monitor ecosystems, clean pollution, and protect wildlife habitats.',
      author: 'David Kim',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Robotics',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      link: '#'
    },
    {
      title: 'Data Science for Climate Action: Predicting Environmental Changes',
      excerpt: 'Using big data and analytics to predict climate patterns, track environmental changes, and inform policy decisions.',
      author: 'Emma Wilson',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      link: '#'
    },
    {
      title: 'Blockchain for Carbon Credits: Transparent Environmental Trading',
      excerpt: 'How blockchain technology is revolutionizing carbon credit markets and making environmental impact more transparent.',
      author: 'Raj Patel',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Blockchain',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
      link: '#'
    }
  ];

  const categories = ['All', 'AI & Environment', 'IoT', 'Renewable Energy', 'Robotics', 'Data Science', 'Blockchain'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

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
            Articles & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Exploring the latest trends and innovations in sustainable technology
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
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-poppins font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-electric-green border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'All' && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-electric-green/30 overflow-hidden mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4 text-sm text-gray-400">
                    <Tag className="w-4 h-4 mr-2 text-electric-green" />
                    <span className="font-poppins">{articles[0].category}</span>
                  </div>
                  
                  <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-glow-white mb-4 leading-tight">
                    {articles[0].title}
                  </h2>
                  
                  <p className="font-poppins text-gray-300 mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2 text-neon-blue" />
                      <span className="font-poppins mr-4">{articles[0].author}</span>
                      <Calendar className="w-4 h-4 mr-2 text-electric-green" />
                      <span className="font-poppins mr-4">{new Date(articles[0].date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2 text-tech-purple" />
                      <span className="font-poppins">{articles[0].readTime}</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href={articles[0].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg font-orbitron font-semibold px-6 py-3 rounded-full hover:from-neon-blue hover:to-tech-purple transition-all duration-300 w-fit"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(selectedCategory === 'All' ? 1 : 0).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-800/50 rounded-xl border border-gray-700 hover:border-electric-green/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded text-xs font-medium border border-neon-blue/30">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-orbitron font-bold text-lg text-glow-white mb-3 group-hover:text-electric-green transition-colors leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="font-poppins text-gray-400 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1 text-electric-green" />
                        <span className="font-poppins mr-3">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-neon-blue" />
                        <span className="font-poppins mr-3">{new Date(article.date).toLocaleDateString()}</span>
                        <Clock className="w-3 h-3 mr-1 text-tech-purple" />
                        <span className="font-poppins">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <a
                      href={article.link}
                      className="inline-flex items-center space-x-2 text-electric-green hover:text-neon-blue transition-colors font-poppins font-medium text-sm"
                    >
                      <span>Read More</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-electric-green/10 via-neon-blue/10 to-tech-purple/10 p-12 rounded-2xl border border-electric-green/20">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-electric-green to-neon-blue bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="font-poppins text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles and insights on sustainable technology delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-green text-glow-white font-poppins"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-green to-neon-blue text-dark-bg font-orbitron font-semibold px-6 py-3 rounded-lg hover:from-neon-blue hover:to-tech-purple transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Articles;