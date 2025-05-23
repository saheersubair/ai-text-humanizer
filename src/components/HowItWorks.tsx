import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ArrowRight, FileCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Paste Your Text",
      number: "1"
    },
    {
      icon: ArrowRight,
      title: "Click Humanize",
      number: "2"
    },
    {
      icon: FileCheck,
      title: "Get Humanized Content",
      number: "3"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          How It Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors duration-300">
                <step.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              {/* Arrow connector (only visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_2rem)] transform -translate-y-1/2 w-16">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="h-0.5 bg-primary-200"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};