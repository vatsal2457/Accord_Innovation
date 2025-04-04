// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/overview';
import AntiBriberyCorruption from './pages/anti-bribery-corruption';
import Layout from './layout';
import Home from './pages/home';
import CodeOfConduct from './pages/code-of-conduct';
import ExecutiveLeadershipTeam from './pages/executive-leadership-team';
import OurClientele from './pages/our-clientele';
import OurStory from './pages/our-story';
import PDPA from './pages/pdpa';
import SoftwareDevelopmentServices from './pages/software-development-services';
import Sustainability from './pages/sustainability';
import ValueProposition from './pages/value-proposition';
import VisionMission from './pages/vision-mission';
import ContactUs from './pages/contactus';
import Career from './pages/carrer';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/anti-bribery-corruption" element={<AntiBriberyCorruption/>} />
        <Route path="/code-of-conduct" element={<CodeOfConduct/>} />
        <Route path="/executive-leadership" element={<ExecutiveLeadershipTeam/>}/>
        <Route path="/our-clientele" element={<OurClientele/>}/>
        <Route path="/our-story" element={<OurStory/>}/>
        <Route path="/pdpa" element={<PDPA/>}/>
        <Route path="/software-development" element={<SoftwareDevelopmentServices/>}/>
        <Route path="/sustainability" element={<Sustainability/>}/>
        <Route path="/value-proposition" element={<ValueProposition/>}/>
        <Route path="/vision-mission" element={<VisionMission/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/career" element={<Career/>}/>
        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
