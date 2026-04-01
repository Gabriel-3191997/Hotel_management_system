import React from "react";
import img1 from "../assets/images/Z (10).jpeg";
class RoyalGrandSection extends React.Components {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-between bg-white md:gap-10 h-auto md:mt-28 md:mx-20  mt-2">
          <div className="md:w-lg mx-2 mt-14 md:mt-0 bg-white">
            <img
              src={img1}
              alt="royal grand hotel"
              className="h-96 w-auto object-cover rounded-sm"
            />
          </div>
          <div className="w-lg bg-white">
            <div className="border-none md:border-gray-500 h-96 w-96 md:shadow-sm bg-white">
              <h1 className="text-center font-sans text-2xl capitalize font-semibold md:py-10">
                royal grand hotel
              </h1>
              <p className="text-center font-sans py-2 text-lg capitalize">
                15 street sinkor <br /> monrovia, liberia
              </p>
              <div className=" md:mt-20 flex flex-wrap justify-center">
                <a
                  href="#"
                  className="px-8 py-3 font-semibold text-lg uppercase rounded-sm bg-amber-500"
                >
                  book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RoyalGrandSection;
