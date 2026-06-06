import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Explorer } from './pages/Explorer';
import { LearningPath } from './pages/LearningPath';
import { Dashboard } from './pages/Dashboard';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Explorer />} />
        <Route path="/path" element={<LearningPath />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
