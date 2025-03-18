import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Video from './pages/Video';
import Blog from './pages/Blog';
import Challenge from './pages/Challenge';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import QR from './pages/QR';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/video" element={<Video />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/qr" element={<QR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
