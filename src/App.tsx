import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DesignPage from './pages/DesignPage';
import IllustrationPage from './pages/IllustrationPage';
import PerformancePage from './pages/PerformancePage';
import AnimationPage from './pages/AnimationPage';
import MusicVideoPage from './pages/MusicVideoPage';
import MyFamilyPage from './pages/MyFamilyPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/design" element={<DesignPage />} />
              <Route path="/illustration" element={<IllustrationPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/animation" element={<AnimationPage />} />
              <Route path="/musicvideo" element={<MusicVideoPage />} />
              <Route path="/myfamily" element={<MyFamilyPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
