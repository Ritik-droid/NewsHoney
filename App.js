import React, { Component } from "react";

import Homepage from "./Navbar";
import Contact from "./Contact";
import Home from "./News";
import Frontpage from './Frontpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Contact/> */}
      
        <Router>
          <Homepage />
    
          <Routes>
            <Route path="/Frontpage" element={<Frontpage />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
