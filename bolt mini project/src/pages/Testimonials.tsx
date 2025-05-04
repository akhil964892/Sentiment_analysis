import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Meh, Frown, Filter } from 'lucide-react';
import type { Feedback } from '../types';

// Mock data for testimonials
const mockTestimonials: Feedback[] = [
  {
    id: '1',
    category: 'product',
    rating: 5,
    message: "The dashboard analytics have transformed how we understand our customer feedback. It's incredibly intuitive!",
    sentiment: 'positive',
    createdAt: '2024-02-28T10:00:00Z'
  },
  {
    id: '2',
    category: 'service',
    rating: 3,
    message: "The system works well, but could use more customization options for different business needs.",
    sentiment: 'neutral',
    createdAt: '2024-02-27T15:30:00Z'
  },
  {
    id: '3',
    category: 'general',
    rating: 2,
    message: "Had some issues with the initial setup. The documentation could be more comprehensive.",
    sentiment: 'negative',
    createdAt: '2024-02-26T09:15:00Z'
  }
];

export function Testimonials() {
  const [filter, setFilter] = React.useState<'all' | 'positive' | 'neutral' | 'negative'>('all');
  const [categoryFilter, setCategoryFilter] = React.useState<'all' | 'product' | 'service' | 'general'>('all');

  const filteredTestimonials = mockTestimonials.filter(testimonial => {
    const matchesSentiment = filter === 'all' || testimonial.sentiment === filter;
    const matchesCategory = categoryFilter === 'all' || testimonial.category === categoryFilter;
    return matchesSentiment && matchesCategory;
  });

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <Smile className="text-green-500" />;
      case 'neutral':
        return <Meh className="text-yellow-500" />;
      case 'negative':
        return <Frown className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Customer Testimonials</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Read what our customers have to say about their experience with our system.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex items-center space-x-4">
          <Filter className="text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Sentiments</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as typeof categoryFilter)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Categories</option>
            <option value="product">Product</option>
            <option value="service">Service</option>
          </select>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium capitalize bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  {testimonial.category}
                </span>
                <span className="w-6 h-6">
                  {getSentimentIcon(testimonial.sentiment)}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(testimonial.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{testimonial.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}