import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ISROHome from './Pages/Home';
import ISROChat from './Pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ISROHome />} />
        <Route path="/chat" element={<ISROChat />} />
      </Routes>
    </Router>
  );
}

export default App;
