import React, { useState, useCallback } from 'react';
import { TextArea } from './TextArea';
import { Button } from './Button';
import { Sparkles, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitText, pollDocument, HumanizeError } from '../services/humanize';

export const TextConverter: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setError(null);
  };

  const pollForResult = useCallback(async (documentId: string, startTime: number) => {
    const MAX_DURATION = 60000; // 60 seconds timeout
    const POLL_INTERVAL = 2000; // 2 seconds interval

    while (Date.now() - startTime < MAX_DURATION) {
      try {
        const result = await pollDocument(documentId);
        return result;
      } catch (error) {
        if (error instanceof HumanizeError && error.message === 'pending') {
          await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
          continue;
        }
        throw error;
      }
    }
    throw new HumanizeError('Request timed out after 60 seconds');
  }, []);

  const handleHumanizeClick = async () => {
    const trimmedText = inputText.trim();
    
    if (trimmedText.length < 50) {
      setError('Please enter at least 50 characters');
      return;
    }

    setIsLoading(true);
    setError(null);
    setOutputText('');

    try {
      const documentId = await submitText(trimmedText);
      const startTime = Date.now();
      const humanizedText = await pollForResult(documentId, startTime);
      setOutputText(humanizedText);
    } catch (error) {
      setError(error instanceof HumanizeError ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="converter" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Transformation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the difference for yourself. Paste your AI-generated content and watch as it transforms into natural human writing.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <TextArea
              label="Enter AI Text Here"
              value={inputText}
              onChange={handleTextChange}
              placeholder="Paste your AI-generated text here (minimum 50 characters)..."
              bgColor="bg-gray-50"
            />
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center text-error-600 text-sm mt-2"
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-4 flex justify-center">
              <Button 
                onClick={handleHumanizeClick} 
                primary 
                disabled={!inputText.trim() || isLoading}
                className="mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Humanizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Humanize
                  </>
                )}
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col relative"
          >
            <TextArea
              label="Humanized Text Output"
              value={outputText}
              placeholder="Your humanized text will appear here..."
              readOnly
              bgColor="bg-white"
            />
            
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 hidden md:flex items-center justify-center">
              <div className="bg-primary-100 rounded-full p-3">
                <ArrowRight className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};