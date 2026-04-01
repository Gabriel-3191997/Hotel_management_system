import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/images/Z (6).jpeg";
import img2 from "../assets/images/9k= (9).jpeg";
import img3 from "../assets/images/2Q== (12).jpeg";
import img4 from "../assets/images/2Q== (24).jpeg";
import img5 from "../assets/images/2Q== (11).jpeg";
import img6 from "../assets/images/2Q== (9).jpeg";
class Discover extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white h-auto md:h-96 md:mx-8 md:mb-32" id="discover">
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
          <div className="flex flex-wrap md:justify-evenly justify-center items-start md:items-center md:mt-10 md:mx-8 md:gap-2 gap-4">
            <div className="bg-white w-full sm:w-96 max-w-sm md:max-w-none mx-3 sm:mx-0 h-auto md:h-96">
              <div className="w-auto h-auto">
                <img
                  src={img1}
                  alt=""
                  className="object-cover w-full h-48 sm:h-56"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/royal-grand-hotel">royal grand hotel</Link> <br />
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
            <div className="bg-white w-full sm:w-96 max-w-sm md:max-w-none mx-3 sm:mx-0 h-auto md:h-96">
              <div className="w-auto h-auto">
                <img
                  src={img2}
                  alt=""
                  className="object-cover w-full h-48 sm:h-56"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/corona-hotel">corona hotel</Link> <br />
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
            <div className="bg-white w-full sm:w-96 max-w-sm md:max-w-none mx-3 sm:mx-0 h-48 sm:h-56 md:h-96">
              <img
                src={img3}
                alt="Boluvard Palace"
                className="object-cover w-full h-48 sm:h-56"
              />
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/boluvard-palace">boluvard palace</Link> <br />
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
        <div className="bg-white h-auto md:h-96 md:mx-8 md:mt-32 mt-32">
          <div className="bg-white flex flex-wrap justify-between gap-0">
            <div className="w-auto bg-white">
              {/* <h1 className="text-3xl font-semibold  mx-3 py-10 text-left md:mx-14 font-sans capitalize md:mt-8">
                discover
              </h1> */}
            </div>
            {/* <div className="w-auto bg-white">
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
            </div> */}
          </div>
          <div className="flex flex-wrap md:justify-evenly justify-center items-start md:items-center md:mt-10 md:mx-8 md:gap-2 gap-4">
            <div className="bg-white w-full sm:w-96 max-w-sm md:max-w-none mx-3 sm:mx-0 h-auto md:h-96">
              <div className="w-auto h-auto">
                <img
                  src={img4}
                  alt=""
                  className="object-cover w-full h-48 sm:h-56"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/bella-casa-hotel">bella casa</Link> <br />
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
            <div className="bg-white w-full sm:w-96 max-w-sm md:max-w-none mx-3 sm:mx-0 h-auto md:h-96">
              <div className="w-auto h-auto">
                <img
                  src={img5}
                  alt=""
                  className="object-cover w-full h-48 sm:h-56"
                />
              </div>
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/sinkor-palace-hotel">sinkor palace hotel</Link> <br />
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
            <div className="bg-white w-full sm:w-96 max-w-sm md:max-w-none mx-3 sm:mx-0 h-48 sm:h-56 md:h-96">
              <img
                src={img6}
                alt="Boluvard Palace"
                className="object-cover w-full h-48 sm:h-56"
              />
              <p className="text-lg py-5 font-sans text-left capitalize mx-0 font-medium">
                <Link to="/fammington-hotel">fammington hotel</Link> <br />
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
