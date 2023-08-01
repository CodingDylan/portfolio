import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Business from './Project1/App'
import Journal from './Project2/App'
import './styles.css'

function App() {
  const styles = {
    textDecoration: 'none', 
    color: 'black',
    display: 'block'
  }

  React.useEffect(() => {
    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
  }, [])
  return (
    <div className="App">
      <nav className="home--nav" id="navbar">
        <ul className="topnav">
          <li> <NavLink style={styles} to="/" exact >Home</NavLink></li>
          <li> <NavLink style={styles}to="/business" >Project 1</NavLink></li>
          <li> <NavLink style={styles}to="/journal" >Project 2</NavLink></li>
        </ul>
      </nav>

      <div className="content">
      <Routes>
        <Route path="/" element={<h1>Home</h1> } />
        <Route path="/business" element={<Business />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
