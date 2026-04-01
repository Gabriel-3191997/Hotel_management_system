import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import RoyalGrandHotel from "./pages/royal_grand_hotel";
import CoronaHotel from "./pages/corona_hotel";
import BoluvardPalaceHotel from "./pages/boluvard_palace";
import BellaCasaHotel from "./pages/bella_casa_hotel";
import SinkorPalaceHotel from "./pages/sinkor_palace";
import FammingtonHotel from "./pages/fammington_hotel";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/royal-grand-hotel" element={<RoyalGrandHotel />} />
          <Route path="/corona-hotel" element={<CoronaHotel />} />
          <Route path="/boluvard-palace" element={<BoluvardPalaceHotel />} />
          <Route path="/bella-casa-hotel" element={<BellaCasaHotel />} />
          <Route path="/sinkor-palace-hotel" element={<SinkorPalaceHotel />} />
          <Route path="/fammington-hotel" element={<FammingtonHotel />} />
        </Routes>
      </>
    );
  }
}

export default App;
