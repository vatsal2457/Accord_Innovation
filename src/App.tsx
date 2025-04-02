// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/overview';
import AntiBriberyCorruption from './pages/anti-bribery-corruption';
import Layout from './layout';
import Home from './pages/home';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/anti-bribery-corruption" element={<AntiBriberyCorruption/>} />
        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
