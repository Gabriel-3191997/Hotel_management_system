import React from "react";
import img1 from "../assets/images/Z (6).jpeg";
class RoyalGrandSection extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-evenly bg-white md:gap-10 h-auto md:mt-28 md:mx-20  mt-2">
          <div className="md:w-lg mx-2 mt-14 md:mt-0 bg-white">
            <img
              src={img1}
              alt="royal grand hotel"
              className="md:h-96 md:w-auto h-auto w-xl object-cover rounded-sm"
            />
            <div className="flex flex-wrap justify-start md:my-10">
              <div className="w-20">1</div>
              <div className="w-20">2</div>
              <div className="w-20">3</div>
            </div>
          </div>
          <div className="w-lg bg-white">
            <div className="border-none mx-5 py-8 md:border-gray-500 h-96 w-96  md:shadow-none bg-white">
              <h1 className="text-left font-sans text-2xl capitalize font-semibold md:py-10">
                royal grand hotel
              </h1>
              <p className="text-left font-sans py-8 text-lg capitalize">
                15 street sinkor <br /> monrovia, liberia
              </p>
              <div className=" md:mt-8 my-2 flex flex-wrap justify-start">
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
