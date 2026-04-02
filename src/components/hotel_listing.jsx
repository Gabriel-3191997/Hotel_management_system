import React from "react";
import img1 from "../assets/images/9k= (9).jpeg";
import img2 from "../assets/images/2Q== (12).jpeg";
import img3 from "../assets/images/2Q== (11).jpeg";
class TopHotels extends React.Component {
  render() {
    return (
      <>
        {/* top hotels */}
        <div className="h-auto bg-white">
          <div className="md:mt-12 md:mb-14">
            <h1 className="capitalize text-center md:text-5xl text-3xl font-sans font-semibold">
              top hotels
            </h1>
          </div>
          <div className="flex flex-nowrap md:flex-wrap md:justify-center md:items-center justify-start gap-4 mt-8 md:mt-0 overflow-x-auto md:overflow-visible px-4 py-2 snap-x snap-mandatory">
            <div className="md:w-96 mt-2 h-80 md:h-96 w-full min-w-full sm:min-w-full md:min-w-0 shrink-0 snap-center flex justify-center">
              <span>
                <img
                  src={img2}
                  alt=""
                  className=" md:cursor-pointer md:hover:scale-105 w-full h-full object-cover md:w-full md:h-full"
                />
              </span>
            </div>
            <div className="md:w-96 h-80 md:h-108 w-full min-w-full sm:min-w-full md:min-w-0 shrink-0 snap-center flex justify-center">
              <span>
                <img
                  src={img1}
                  alt=""
                  className="md:rounded-none md:cursor-pointer w-full h-full md:hover:scale-105 object-cover md:w-full md:h-full"
                />
              </span>
            </div>
            <div className="md:w-96 mt-2 h-80 md:h-96 w-full min-w-full sm:min-w-full md:min-w-0 shrink-0 snap-center flex justify-center">
              <span>
                <img
                  src={img3}
                  alt=""
                  className="md:rounded-none md:hover:scale-105 hover:cursor-pointer h-full md:h-full  object-cover md:w-full w-full"
                />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopHotels;
