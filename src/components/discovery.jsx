import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/images/Z (6).jpeg";
import img2 from "../assets/images/9k= (9).jpeg";

class Discover extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white h-96 md:mx-8">
          <div className="bg-white flex flex-wrap justify-between gap-0">
            <div className="w-auto bg-white">
              {/* <h1 className="text-3xl font-semibold  mx-3 py-10 text-left md:mx-14 font-sans capitalize md:mt-8">
                discover
              </h1> */}
            </div>
            <div className="w-auto bg-white">
              <h1 className="text-xl font-semibold  mx-3 py-10 text-left md:mr-20 font-sans capitalize md:mt-8">
                <FontAwesomeIcon icon={faFilter} className="text-lg mx-0" />

                <span className="text-sm font-normal">
                  <select name="option" id="option">
                    <option value="Prices">Sort prices</option>
                    <option value=" High">High</option>
                    <option value="Lowest">Lowest</option>
                  </select>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-evenly justify-center items-center md:mt-10 md:mx-8 md:gap-2 gap-3">
            <div className="bg-white md:w-96 w-96 mx-3 h-96">
              <div className="w-auto h-auto">
                <img src={img1} alt="" className="object-cover w-96 h-56" />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                royal grand hotel <br />
                <span className="font-sans font-normal text-sm">
                  12 Street Sinkor
                </span>
              </p>
              <div className="flex flex-wrap justify-start gap-0 bg-white">
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white md:w-96 w-96 mx-3 h-96">
              <div className="w-auto h-auto">
                <img src={img2} alt="" className="object-cover w-96 h-56" />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                corona hotel <br />
                <span className="font-sans font-normal text-sm">
                  24 Street Sinkor
                </span>
              </p>
              <div className="flex flex-wrap justify-start gap-0 bg-white">
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
                <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-600 md:w-96 w-96 mx-3 h-96">3</div>
          </div>
        </div>
      </>
    );
  }
}

export default Discover;
