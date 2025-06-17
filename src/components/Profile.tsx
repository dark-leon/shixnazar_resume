'use client';

import { motion } from 'framer-motion';
import { User, Target, Lightbulb, Rocket, Heart } from 'lucide-react';

const Profile = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results and successful project completion"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Committed to daily skill enhancement and staying updated with latest technologies"
    },
    {
      icon: Rocket,
      title: "Tech Explorer",
      description: "Not afraid to explore new technologies and adapt quickly to changes"
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Experienced in team-based project environments and collaborative development"
    }
  ];

  return (
    <section id="profile" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <User className="text-purple-600 mr-3" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Professional Profile
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Main Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              About Me
            </h3>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="text-lg mb-6">
                I am currently enrolled in a fullstack development course and have gained hands-on 
                experience working in team-based project environments. Once a project begins, I focus 
                on delivering high-quality results and ensuring its successful completion.
              </p>
              
              <p className="text-lg mb-6">
                I am committed to continuous self-improvement and work daily to enhance my skills 
                in this field. I am not afraid to explore new technologies and have the ability 
                to learn and adapt quickly to the ever-evolving tech landscape.
              </p>
              
              <p className="text-lg">
                My passion for coding and problem-solving drives me to create innovative solutions 
                that make a real impact. I believe in writing clean, maintainable code and 
                following best practices in software development.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                <div className="text-3xl font-bold gradient-text">2024</div>
                <div className="text-gray-600">Started Journey</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className="text-gray-600">Hours Coding</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Key Strengths
            </h3>
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover-glow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <highlight.icon className="text-purple-600" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 