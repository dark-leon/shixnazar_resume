'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown, Code, Database, Server } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const skills = [
    { icon: Code, label: 'Frontend Development' },
    { icon: Server, label: 'Backend Development' },
    { icon: Database, label: 'Database Management' },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                <span className="block">Muhammadrasul</span>
                <span className="block text-yellow-300">Shixnazarov</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
                Full Stack Developer & Software Engineer
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                Passionate about creating innovative web solutions with modern technologies. 
                Currently mastering full-stack development with a focus on scalable applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 hover-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </motion.button>
                
                <motion.a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get In Touch</span>
                </motion.a>
              </div>

              {/* Skills Icons */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="flex items-center space-x-2 text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <skill.icon size={20} />
                    <span className="text-sm">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right content - Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                {/* Profile placeholder - you can replace with actual image */}
                <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold">M</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-purple-800 p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Code size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-green-400 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Database size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#profile" className="text-white/70 hover:text-white transition-colors">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 