import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import './style.css';

function App() {
  return (
    <div className="app">
      <container>
      <div className="color-box">
            <Info />
            <About />
            <Interests />
        </div>
        <Footer />
      </container>
    </div>
  );
}

export default App;