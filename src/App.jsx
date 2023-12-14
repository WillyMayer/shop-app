import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //Routes is the new Switch
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
