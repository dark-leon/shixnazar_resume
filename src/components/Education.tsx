'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Najot ta'lim IT Center",
      course: "Foundation Course",
      description: "Started learning programming and algorithms at the foundation level",
      period: "Jun 2024 – Aug 2024",
      location: "Khorezm, Uzbekistan",
      grade: "High marks",
      skills: ["Programming Fundamentals", "Algorithms", "Problem Solving", "Logic Building"],
      color: "from-blue-500 to-purple-600"
    },
    {
      institution: "Najot ta'lim IT Center",
      course: "Bootcamp Full Stack (NodeJS+VueJS)",
      description: "Comprehensive full-stack development bootcamp focusing on modern web technologies",
      period: "Aug 2024 – Okt 2024",
      location: "Khorezm, Uzbekistan",
      grade: "Successfully Completed",
      skills: ["Node.js", "Vue.js", "Full Stack Development", "Web Development", "Database Design"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "High Performance",
      description: "Completed Foundation course with high marks"
    },
    {
      icon: Award,
      title: "Full Stack Certified",
      description: "Successfully completed intensive bootcamp program"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Committed to ongoing skill development"
    }
  ];

  return (
    <section id="education" className="py-12 md:py-16 lg:py-20 bg-white">
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
            <GraduationCap className="text-purple-600 mr-3" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Education & Certifications
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            My educational journey in software development and programming
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

          <div className="space-y-8 md:space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={education.course}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 sm:left-4.5 md:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${education.color} rounded-full border-2 sm:border-4 border-white shadow-lg z-10`}></div>

                {/* Content */}
                <div className="ml-12 sm:ml-16 md:ml-20 flex-1">
                  <motion.div
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {education.course}
                        </h3>
                        <h4 className="text-lg text-purple-600 font-semibold mb-2">
                          {education.institution}
                        </h4>
                      </div>
                      <div className="flex flex-col lg:items-end">
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">{education.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {education.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <Award className="text-green-600 mr-2" size={20} />
                        <span className="font-semibold text-gray-900">Grade: </span>
                        <span className="text-green-600 font-medium ml-1">{education.grade}</span>
                      </div>
                    </div>

                    {/* Skills learned */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Skills & Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {education.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className={`px-3 py-1 bg-gradient-to-r ${education.color} text-white text-sm rounded-full font-medium`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              My education at Najot ta&apos;lim provided a solid foundation in programming and full-stack development. 
              I believe that learning never stops in the tech industry, and I&apos;m committed to staying updated 
              with the latest technologies and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 