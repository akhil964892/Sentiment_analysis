import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function About() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About FeedbackAI</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              FeedbackAI is a cutting-edge customer feedback system that leverages artificial intelligence
              to help businesses understand and act on customer sentiment in real-time.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  AI-Powered Analysis
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Our advanced AI algorithms analyze customer feedback to provide actionable insights
                  and sentiment analysis in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Friendly & Relatable
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Ever wondered what people really think about your product or service? We did too — and that’s why we built this tool.
Our platform uses smart AI to read between the lines of reviews, ratings, and messages, and gives you a simple sentiment breakdown: Positive, Negative, or Neutral. Whether you're a small business owner, a marketer, or just curious, we help you understand feedback at a glance.

No more guessing. Just clear insights.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}