// import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Customer</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Feedback with AI</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Harness the power of AI to understand your customers better. Get real-time insights and make data-driven decisions.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Submit Feedback
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A better way to understand your customers
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Real-time Feedback</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Collect and analyze customer feedback in real-time with our advanced AI system.
                </dd>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Brain className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">AI-Powered Analysis</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Leverage advanced AI algorithms to understand sentiment and extract valuable insights.
                </dd>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Visual Analytics</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Beautiful, interactive dashboards that help you visualize and understand your data.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}