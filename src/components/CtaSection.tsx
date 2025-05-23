import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Start Creating More Engaging Content Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of content creators who are already transforming their AI-generated text into natural, engaging content.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={() => navigate('/signup')}
              primary
              className="text-lg px-12 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Try For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};