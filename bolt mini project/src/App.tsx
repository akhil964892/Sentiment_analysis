import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import SubmitFeedback from "./pages/SubmitFeedback";

import { Dashboard } from './pages/Dashboard';
import { Testimonials } from './pages/Testimonials';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<SubmitFeedback />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;