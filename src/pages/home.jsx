import React from "react";
import NavBar from "../components/nav";
import Banner from "../components/banner";
import Filtering from "../components/filtering_section";
import TopHotels from "../components/hotel_listing";
import Discover from "../components/discovery";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <Filtering />
        <TopHotels />
        <Discover />
      </>
    );
  }
}

export default HomePage;
