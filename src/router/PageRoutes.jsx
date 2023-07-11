import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "../screen/home/Homepage";
import Header from "../components/header/Header";
import { AppContextProvider } from "../context/AppContext";
import RewardCalculator from "../screen/calculator/RewardCalculator";
import Validators from "../screen/validators/Validators";
import Footer from "../components/footer/Footer";

function PageRoutes() {
  return (
    <AppContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/rewards-calculator" element={<RewardCalculator />} />
          <Route path="/validators" element={<Validators />} />
        </Routes>
        <Footer />
      </Router>
    </AppContextProvider>
  );
}

export default PageRoutes;
