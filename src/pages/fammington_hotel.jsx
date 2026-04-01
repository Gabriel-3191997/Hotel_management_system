import React from "react";
import NavBar from "../components/nav";

class FammingtonHotel extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="px-6 py-10">
          <h1 className="text-2xl font-semibold">Fammington Hotel</h1>
        </div>
      </>
    );
  }
}

export default FammingtonHotel;
