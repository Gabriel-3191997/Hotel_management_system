import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLocationDot,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import img2 from "../../assets/images/Z (18).jpeg";
import img3 from "../../assets/images/9k= (18).jpeg";
import img4 from "../../assets/images/Z (16).jpeg";

import img1 from "../../assets/images/Z (6).jpeg";
class RoyalGrandSection extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-evenly bg-white md:gap-10 h-auto md:mt-28 md:mx-20  mt-2">
          <div className="md:w-lg mx-2 mt-14 md:mt-0 bg-white">
            <img
              src={img1}
              alt="royal grand hotel"
              className="md:h-96 md:w-auto h-auto w-xl object-cover rounded-none"
            />
            <div className="flex flex-wrap justify-start md:my-10 md:gap-2 gap-4 my-5">
              <div className="w-28">
                <img src={img2} alt="" className="h-20 md:rounded-none w-40" />
              </div>
              <div className="w-28">
                <img src={img3} alt="" className="h-20 md:rounded-none w-40" />
              </div>
              <div className="w-28">
                <img src={img4} alt="" className="h-20 md:rounded-none w-40" />
              </div>
            </div>
          </div>
          <div className="w-lg bg-white">
            <div className="border-none mx-5  md:border-gray-500 h-96 w-96  md:shadow-none bg-white">
              <h1 className="text-left font-sans text-2xl capitalize font-semibold  my-2">
                royal grand hotel
              </h1>
              <p className="text-left font-sans py-3  text-sm capitalize">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-2 text-black"
                />
                : 15 street sinkor <br /> monrovia, liberia
              </p>
              {/* contact */}
              <p className="text-left font-sans py-2 text-sm capitalize">
                <FontAwesomeIcon
                  icon={faSnowflake}
                  className="mr-2 text-black"
                />
                : fully cool
              </p>
              {/* bed rooms */}
              <p className="text-left font-sans py-2 text-sm capitalize">
                <FontAwesomeIcon icon={faBed} className="mr-2 text-black" />:
                150 bed rooms
              </p>
              <div className=" md:mt-8 my-2 flex flex-wrap justify-start">
                <a
                  href="#"
                  className="px-8 py-3 font-semibold text-lg uppercase rounded-none bg-amber-500"
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
