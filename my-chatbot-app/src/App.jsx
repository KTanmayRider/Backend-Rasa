import React from 'react'
import HeroSection from '../src/Components/HeroSection/HeroSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Insights from "../src/Components/Insights/Insights";
import AppNavbar from './Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer';
import Services from "../src/Components/Services/Services";
import ConnectUs from "../src/Components/Connect/ConnectUs";
import Career from '../src/Components/Career/Career';
import ChatbotComponent from "./Components/Chatbot/chatbot/Chatbot";
import ChatButton from './Components/Chatbot/ChatButton';

export default function App() {
  return (
    <>
      <Router>
       <>
         <AppNavbar />
         <Routes>
           <Route path="/" element={<HeroSection/>}/>
             <Route path="/insights"  element={<Insights />} />
             <Route path="/services" element={<Services/>}/>
             <Route path="/connect" element={<ConnectUs/>}/>
             <Route path="/career" element={<Career/>}/>
          </Routes>
          <ChatButton />
          <Footer />
       </>
     </Router>
    </>
  )
}


