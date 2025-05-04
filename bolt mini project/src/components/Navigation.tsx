// import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, Users, Info } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: MessageSquare },
    { to: '/submit', label: 'Submit Feedback', icon: MessageSquare },
    { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { to: '/testimonials', label: 'Testimonials', icon: Users },
    { to: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">FeedbackAI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-md text-sm font-medium relative ${
                  location.pathname === to
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <div className="flex items-center space-x-1">
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
                {location.pathname === to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}