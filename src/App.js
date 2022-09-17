import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage"
import TechStack from './components/TechStack/TechStack'
import Experience from "./components/Experience/Experience"

// 1. Navbar
// 2. LandingPage
// 3. TechStack
// 4. Experience
// 5. Projects

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <LandingPage />
      <TechStack />
      <Experience />
    </div>
  );
}
export default App;

// App.js (parent) > components (children)
