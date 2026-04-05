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
import RoyalGrandBooking from "./components/Bookings/components/royal_grand_bookings";
import CoronaHotelBooking from "./components/Bookings/components/coronal_hotel_bookings";
import BoluvardHotelBooking from "./components/Bookings/components/boluvard_hotel";
import BellaCassaHotelBooking from "./components/Bookings/components/bella_cassa_hotel";
import SinkorPalaceHotelBooking from "./components/Bookings/components/sinkor_palace_hotel";
import FammingtonHotelBooking from "./components/Bookings/fammington_hotel";
import LoginForm from "./components/Auth/Login/login";

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
          <Route path="/login" element={<LoginForm />} />
          <Route path="/bookings/royal-grand-hotel" element={<RoyalGrandBooking />} />
          <Route path="/bookings/corona-hotel" element={<CoronaHotelBooking />} />
          <Route path="/bookings/boluvard-palace" element={<BoluvardHotelBooking />} />
          <Route path="/bookings/bella-casa-hotel" element={<BellaCassaHotelBooking />} />
          <Route path="/bookings/sinkor-palace-hotel" element={<SinkorPalaceHotelBooking />} />
          <Route path="/bookings/fammington-hotel" element={<FammingtonHotelBooking />} />
        </Routes>
      </>
    );
  }
}

export default App;
