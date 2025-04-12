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
import BankingAndFinancialServices from './pages/banking-and-financial-services';
import Software from './pages/software';
import Manufacturing from './pages/manufacturing';
import Energy from './pages/energy';
import MedicalDevices from './pages/medical-devices';
import Insurance from './pages/insurance';
import Healthcare from './pages/healthcare';
import Retail from './pages/retail';
import TravelAndLogistics from './pages/travel-and-logistics';
import Pharmaceutical from './pages/pharmaceutical';
import Telecommunication from './pages/telecommunication';
import AerospaceAndAviation from './pages/aerospace-and-aviation';
import ConsumerElectronicsSector from './pages/consumer-electronics-sector';
import LifeScience from './pages/life-science';
import Automotive from './pages/automotive';
import ProductEngineering from './pages/product-engineering';
import SaasCloud from './pages/saas-cloud';
import DataManagement from './pages/data-management';
import WebTechnologies from './pages/web-technologies';
import ErpCrm from './pages/erp-crm';
import AiChatBot from './pages/ai-chat-bot';

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
        <Route path="/banking-financial-services" element={<BankingAndFinancialServices/>}/>
        <Route path="/software" element={<Software/>}/>
        <Route path="/manufacturing" element={<Manufacturing/>}/>
        <Route path="/energy" element={<Energy/>}/>
        <Route path="/medical-devices" element={<MedicalDevices/>}/>
        <Route path="/insurance" element={<Insurance/>}/>
        <Route path="/healthcare" element={<Healthcare/>}/>
        <Route path="/retail" element={<Retail/>}/>
        <Route path="/travel-and-logistics" element={<TravelAndLogistics/>}/>
        <Route path="/pharmaceutical" element={<Pharmaceutical/>}/>
        <Route path="/telecommunication" element={<Telecommunication/>}/>
        <Route path="/aerospace-and-aviation" element={<AerospaceAndAviation/>}/>
        <Route path="/consumer-electronics-sector" element={<ConsumerElectronicsSector/>}/>
        <Route path="/life-science" element={<LifeScience/>}/>
        <Route path="/automotive" element={<Automotive/>}/>
        <Route path="/product-engineering" element={<ProductEngineering/>}/>
        <Route path="/saas-cloud" element={<SaasCloud/>}/>
        <Route path="/data-management" element={<DataManagement/>}/>
        <Route path="/web-technologies" element={<WebTechnologies/>}/>
        <Route path="/erp-crm" element={<ErpCrm/>}/>
        <Route path="/ai-chat-bot" element={<AiChatBot/>}/>
        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
