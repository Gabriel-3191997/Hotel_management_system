import React from "react";
import NavBar from "../components/nav";
import Banner from "../components/banner";
import Filtering from "../components/filtering_section";
import TopHotels from "../components/hotel_listing";
import Discover from "../components/discovery";
import Footer from "../components/footer";

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
