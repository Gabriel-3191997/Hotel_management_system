import React from "react";
import NavBar from "../components/nav";

class BoluvardPalaceHotel extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="px-6 py-10">
          <h1 className="text-2xl font-semibold">Boluvard Palace Hotel</h1>
        </div>
      </>
    );
  }
}

export default BoluvardPalaceHotel;
