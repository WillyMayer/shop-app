import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //Routes is the new Switch
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";
import Steps from "./components/Steps";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<History />} />
            <Route path="/steps" element={<Steps />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
