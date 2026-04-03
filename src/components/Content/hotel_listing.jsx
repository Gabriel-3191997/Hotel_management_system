import React from "react";
import img1 from "../../assets/images/9k= (9).jpeg";
import img2 from "../../assets/images/2Q== (12).jpeg";
import img3 from "../../assets/images/2Q== (11).jpeg";
class TopHotels extends React.Component {
  render() {
    return (
      <>
        {/* top hotels */}
        <div className="h-auto bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-10 sm:mt-12 mb-6 sm:mb-10 md:mb-12">
              <h1 className="capitalize text-center md:text-5xl text-3xl font-sans font-semibold">
                top hotels
              </h1>
            </div>
            <div className="flex flex-nowrap lg:grid lg:grid-cols-3 lg:gap-6 gap-4 sm:gap-6 mt-6 sm:mt-4 lg:mt-0 overflow-x-auto lg:overflow-visible py-2 snap-x snap-mandatory">
            <div className="h-80 lg:h-96 w-full min-w-full sm:min-w-full md:min-w-full lg:min-w-0 shrink-0 snap-center flex justify-center">
              <span className="block w-full">
                <img
                  src={img2}
                  alt=""
                  className="lg:cursor-pointer lg:hover:scale-105 w-full h-full object-cover"
                />
              </span>
            </div>
            <div className="h-80 lg:h-108 w-full min-w-full sm:min-w-full md:min-w-full lg:min-w-0 shrink-0 snap-center flex justify-center">
              <span className="block w-full">
                <img
                  src={img1}
                  alt=""
                  className="lg:rounded-none lg:cursor-pointer w-full h-full lg:hover:scale-105 object-cover"
                />
              </span>
            </div>
            <div className="h-80 lg:h-96 w-full min-w-full sm:min-w-full md:min-w-full lg:min-w-0 shrink-0 snap-center flex justify-center">
              <span className="block w-full">
                <img
                  src={img3}
                  alt=""
                  className="lg:rounded-none lg:hover:scale-105 hover:cursor-pointer h-full object-cover w-full"
                />
              </span>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopHotels;
