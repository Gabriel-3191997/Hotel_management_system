import React from "react";
import NavBar from "../Content/nav";
import Banner from "../Content/banner";
import Filtering from "../Content/filtering_section";
import TopHotels from "../Content/hotel_listing";
import Discover from "../Content/discovery";
import Footer from "../Content/footer";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <Filtering />
        <TopHotels />
        <Discover />
        <Footer />
      </>
    );
  }
}

export default HomePage;
