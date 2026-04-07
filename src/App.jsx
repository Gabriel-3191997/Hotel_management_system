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
import FammingtonHotelBooking from "./components/Bookings/components/fammington_hotel_bookings";
import LoginForm from "./components/Auth/Login/login";
import AuthCode from "./components/Auth/Login/2_factors_auth";
import ForgotPassword from "./components/Auth/Login/forget_password";
import SignupForm from "./components/Auth/Login/Signup/signup";
import BookingHomePage from "./components/Bookings/pages/home";
import BookingRoyalGrandHotel from "./components/Bookings/pages/royal_grand_hotel";
import BookingCoronaHotel from "./components/Bookings/pages/corona_hotel";
import BookingBoluvardPalaceHotel from "./components/Bookings/pages/boluvard_palace";
import BookingBellaCasaHotel from "./components/Bookings/pages/bella_casa_hotel";
import BookingSinkorPalaceHotel from "./components/Bookings/pages/sinkor_palace";
import BookingFammingtonHotel from "./components/Bookings/pages/fammington_hotel";

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
          <Route path="/two-factor-auth" element={<AuthCode />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/bookings" element={<BookingHomePage />} />
          <Route path="/bookings/hotels/royal-grand-hotel" element={<BookingRoyalGrandHotel />} />
          <Route path="/bookings/hotels/corona-hotel" element={<BookingCoronaHotel />} />
          <Route path="/bookings/hotels/boluvard-palace" element={<BookingBoluvardPalaceHotel />} />
          <Route path="/bookings/hotels/bella-casa-hotel" element={<BookingBellaCasaHotel />} />
          <Route path="/bookings/hotels/sinkor-palace-hotel" element={<BookingSinkorPalaceHotel />} />
          <Route path="/bookings/hotels/fammington-hotel" element={<BookingFammingtonHotel />} />
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
