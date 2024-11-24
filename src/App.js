import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ViewPage from './components/ViewPage';
import FeedbackPage from './components/FeedbackPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/view" element={<ViewPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  </Router>
);

export default App;
