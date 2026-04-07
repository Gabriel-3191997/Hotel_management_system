import React from "react";
import NavBar from "../Content/nav";
import Fammington_Hotel_Section from "../Content/fammington_hotel_section";
import FammingtonAbout from "../Content/fammington_section";

class FammingtonHotel extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Fammington_Hotel_Section />
        <FammingtonAbout />
      </>
    );
  }
}

export default FammingtonHotel;
