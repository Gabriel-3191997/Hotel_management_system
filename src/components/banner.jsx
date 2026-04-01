import React from "react";
// import "../styles/stylings.scss";
import DemoCarousel from "./carousel";
class Banner extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center items-center bg-white  md:gap-0 gap-8">
          <div className="w-xl md:h-96 h-auto bg-white">
            <h1 className="md:text-5xl text-4xl md:mx-0 mx-5 md:mt-10 mt-28 font-sans font-medium uppercase">
              {/* <span className="text-sm">live</span>
              <br /> */}
              live in luxury <br /> with comfort &amp; style
            </h1>
            <p className="font-sans front-normal md:mt-3 md:w-lg mx-5 md:mx-0 py-2">
              Eleifend et natoque quibusdam vivamus aute, labore labore, natus
              accusamus, laboris! Nunc, dui occaecati ante, pariatur.
              {/* Lobortis.Occaecat quasi dignissimos fugiat fringilla! Curabitur
              aliquam porro imperdiet magni lacus scelerisque. Integer
              exercitationem, mollitia dapibus esse do sagittis est ea nemo sit?
              Adipiscing! Voluptatibus! */}
            </p>
            <br />
            <div className="md:py-1 py-0 md:mx-0 mx-5">
              <a
                href="#discover"
                className="bg-amber-500 text-md rounded-sm cursor-pointer hover:bg-amber-400 font-sans px-8 py-3 capitalize"
              >
                discover
              </a>
            </div>
          </div>
          {/* carousel image */}
          <div className="w-lg bg-white h-96 md:mt-32">
            <div className="md:w-lg w-auto mx-2 bg-white md:h-96 h-80 rounded">
              <DemoCarousel />
              {/* <img src={image1} alt="" className="w-full h-full rounded" /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
