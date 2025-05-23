import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, HelpCircle, Lock, Loader2 } from 'lucide-react';
import { Button } from '../components/Button';
import payment from 'payment';

export const Payment: React.FC = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!payment.fns.validateCardNumber(cardNumber.replace(/\s+/g, ''))) {
      setError('Invalid card number');
      return;
    }

    if (!payment.fns.validateCardExpiry(expiry.split('/'))) {
      setError('Invalid expiry date');
      return;
    }

    if (!payment.fns.validateCardCVC(cvc)) {
      setError('Invalid CVC');
      return;
    }

    if (!agreed) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful payment here
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h2>
          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-lg font-semibold text-primary-900">Pro Plan - $10/month</p>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                Cardholder Name
              </label>
              <input
                id="cardName"
                type="text"
                required
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter name as shown on card"
              />
            </div>

            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="cardNumber"
                  type="text"
                  required
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  className="mt-1 block w-full pl-10 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  id="expiry"
                  type="text"
                  required
                  maxLength={5}
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="MM/YY"
                />
              </div>

              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                  <span className="ml-1 inline-block" title="The 3 or 4 digit security code on the back of your card">
                    <HelpCircle className="h-4 w-4 text-gray-400 inline" />
                  </span>
                </label>
                <input
                  id="cvc"
                  type="text"
                  required
                  maxLength={4}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="123"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#terms" className="text-primary-600 hover:text-primary-500">Terms and Conditions</a>
              </label>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-error-600 text-center"
            >
              {error}
            </motion.div>
          )}

          <div className="flex items-center justify-center space-x-4">
            <img src="https://raw.githubusercontent.com/stripe/stripe-press/master/public/images/visa.svg" alt="Visa" className="h-8" />
            <img src="https://raw.githubusercontent.com/stripe/stripe-press/master/public/images/mastercard.svg" alt="Mastercard" className="h-8" />
            <img src="https://raw.githubusercontent.com/stripe/stripe-press/master/public/images/amex.svg" alt="American Express" className="h-8" />
          </div>

          <Button
            onClick={() => {}}
            primary
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Lock className="mr-2 h-5 w-5" />
                Subscribe Now
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center">
          <Lock className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-sm text-gray-500">Secure payment processing</span>
        </div>
      </motion.div>
    </div>
  );
};