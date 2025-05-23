import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Shield } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Improve Readability",
      description: "Transform complex AI text into clear, natural language that flows effortlessly. Perfect for content that connects with your audience."
    },
    {
      icon: Sparkles,
      title: "Enhance Engagement",
      description: "Add personality and warmth to AI-generated content. Create text that sparks conversations and keeps readers interested."
    },
    {
      icon: Shield,
      title: "Maintain Authenticity",
      description: "Preserve your message while making it sound more human. Strike the perfect balance between professional and conversational tone."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Why Choose Our AI Humanizer?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary-100">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};