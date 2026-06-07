import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Explorer } from './pages/Explorer';
import { LearningPath } from './pages/LearningPath';
import { Dashboard } from './pages/Dashboard';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Explorer />} />
        <Route path="/path" element={<LearningPath />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <AnimatedRoutes />
    </main>
  </BrowserRouter>
);

export default App;
