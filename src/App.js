import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage"
import TechStack from './components/TechStack/TechStack'

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
    </div>
  );
}
export default App;

// App.js (parent) > components (children)
