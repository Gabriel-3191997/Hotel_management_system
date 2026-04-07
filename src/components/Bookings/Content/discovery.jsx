import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../../assets/images/Z (6).jpeg";
import img2 from "../../../assets/images/9k= (9).jpeg";
import img3 from "../../../assets/images/2Q== (12).jpeg";
import img4 from "../../../assets/images/2Q== (24).jpeg";
import img5 from "../../../assets/images/2Q== (11).jpeg";
import img6 from "../../../assets/images/2Q== (9).jpeg";
class Discover extends React.Component {
  render() {
    return (
      <>
        <div
          className="bg-white h-auto md:mb-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          id="discover"
        >
          <div className="bg-white flex flex-wrap items-center justify-between gap-2">
            <div className="w-auto bg-white">
              {/* <h1 className="text-3xl font-semibold  mx-3 py-10 text-left md:mx-14 font-sans capitalize md:mt-8">
                discover
              </h1> */}
            </div>
            <div className="w-auto bg-white">
              <h1 className="text-xl font-semibold mx-0 py-6 sm:py-8 text-left md:mr-0 font-sans capitalize">
                <FontAwesomeIcon icon={faFilter} className="text-lg mx-0" />

                <span className="text-sm font-normal">
                  <select name="option" id="option" className="border-none">
                    <option value="Prices">Sort prices</option>
                    <option value=" High">High</option>
                    <option value="Lowest">Lowest</option>
                  </select>
                </span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="bg-white w-full h-auto">
              <div className="w-auto h-auto">
                <img
                  src={img1}
                  alt=""
                  className="object-cover w-full h-52 sm:h-56 md:h-60"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bookings/hotels/royal-grand-hotel">royal grand hotel</Link> <br />
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
                {/* <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div> */}
              </div>
            </div>
            <div className="bg-white w-full h-auto">
              <div className="w-auto h-auto">
                <img
                  src={img2}
                  alt=""
                  className="object-cover w-full h-52 sm:h-56 md:h-60"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bookings/hotels/corona-hotel">corona hotel</Link> <br />
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
            <div className="bg-white w-full h-auto">
              <img
                src={img3}
                alt="Boluvard Palace"
                className="object-cover w-full h-52 sm:h-56 md:h-60"
              />
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bookings/hotels/boluvard-palace">boluvard palace</Link> <br />
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
                {/* <div className="w-auto">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="bg-white h-auto mt-16 sm:mt-20 md:mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white flex flex-wrap items-center justify-between gap-2">
            <div className="w-auto bg-white">
              {/* <h1 className="text-3xl font-semibold  mx-3 py-10 text-left md:mx-14 font-sans capitalize md:mt-8">
                discover
              </h1> */}
            </div>
            {/* <div className="w-auto bg-white">
              <h1 className="text-xl font-semibold mx-0 py-6 sm:py-8 text-left md:mr-0 font-sans capitalize">
                <FontAwesomeIcon icon={faFilter} className="text-lg mx-0" />

                <span className="text-sm font-normal">
                  <select name="option" id="option">
                    <option value="Prices">Sort prices</option>
                    <option value=" High">High</option>
                    <option value="Lowest">Lowest</option>
                  </select>
                </span>
              </h1>
            </div> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="bg-white w-full h-auto">
              <div className="w-auto h-auto">
                <img
                  src={img4}
                  alt=""
                  className="object-cover w-full h-52 sm:h-56 md:h-60"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bookings/hotels/bella-casa-hotel">bella casa</Link> <br />
                <span className="font-sans font-normal text-sm">
                  3rd Street Sinkor
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
                {/* <div className="w-auto">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-lg mx-0 text-amber-500"
                  />
                </div> */}
              </div>
            </div>
            <div className="bg-white w-full h-auto">
              <div className="w-auto h-auto">
                <img
                  src={img5}
                  alt=""
                  className="object-cover w-full h-52 sm:h-56 md:h-60"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bookings/hotels/sinkor-palace-hotel">sinkor palace hotel</Link>{" "}
                <br />
                <span className="font-sans font-normal text-sm">
                  congo town
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
            <div className="bg-white w-full h-auto">
              <img
                src={img6}
                alt="Boluvard Palace"
                className="object-cover w-full h-52 sm:h-56 md:h-60"
              />
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bookings/hotels/fammington-hotel">fammington hotel</Link> <br />
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
                {/* <div className="w-auto">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Discover;
