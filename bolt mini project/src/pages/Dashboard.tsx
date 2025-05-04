// import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Calendar, Filter, Download } from 'lucide-react';

const mockData = {
  sentiment: [
    { name: 'Positive', value: 65 },
    { name: 'Neutral', value: 20 },
    { name: 'Negative', value: 15 },
  ],
  categories: [
    { name: 'Product', positive: 40, neutral: 10, negative: 5 },
    { name: 'Service', positive: 15, neutral: 5, negative: 8 },
  ],
};

const COLORS = ['#4ade80', '#facc15', '#f87171'];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sentiment Analysis Dashboard</h1>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <Calendar size={20} />
            <span>Last 7 days</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <Filter size={20} />
            <span>Filter</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white"
          >
            <Download size={20} />
            <span>Export</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sentiment Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Sentiment Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockData.sentiment}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >

                  {mockData.sentiment.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}

                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Category Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Category Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.categories}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="positive" fill={COLORS[0]} stackId="a" />
                <Bar dataKey="neutral" fill={COLORS[1]} stackId="a" />
                <Bar dataKey="negative" fill={COLORS[2]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}