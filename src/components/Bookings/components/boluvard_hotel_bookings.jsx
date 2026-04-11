import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../Content/nav";
import img1 from "../../../assets/images/2Q== (12).jpeg";
import img2 from "../../../assets/images/Z (18).jpeg";
import img3 from "../../../assets/images/9k= (18).jpeg";
import img4 from "../../../assets/images/Z (16).jpeg";

import Suites from "../Content/suites";
// import BottomNav from "../Content/bottom_nav";

class BoluvardHotelBooking extends React.Component {
  state = {
    checkIn: null,
    checkOut: null,
  };

  render() {
    return (
      <>
        <NavBar />
        {/* <BottomNav /> */}
        <div className="mx-3 bg-white mt-14 md:mt-20 lg:mx-44">
          <Link
            to="/bookings"
            className="text-left font-sans text-sm font-medium capitalize text-blue-700"
          >
            back
          </Link>
        </div>
        <div className="flex flex-wrap justify-evenly mt-5 bg-white h-auto">
          <div className="md:w-auto">
            <img src={img1} alt="" srcSet="" className="w-lg" />
            <div className="md:py-8 md:mx-0 mx-3">
              <div className="my-5 flex flex-wrap justify-start gap-4 md:my-10 md:gap-2">
                <div className="w-[30%] min-w-24 sm:w-28">
                  <img
                    src={img2}
                    alt=""
                    className="h-20 w-full object-cover md:rounded-none"
                  />
                </div>
                <div className="w-[30%] min-w-24 sm:w-28">
                  <img
                    src={img3}
                    alt=""
                    className="h-20 w-full object-cover md:rounded-none"
                  />
                </div>
                <div className="w-[30%] min-w-24 sm:w-28">
                  <img
                    src={img4}
                    alt=""
                    className="h-20 w-full object-cover md:rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex h-auto flex-wrap items-start justify-center gap-6 px-4  md:justify-evenly md:px-6">
              <div className="w-full max-w-xl"></div>
              {/* booking form */}
              <div className="flex w-full max-w-xl justify-center">
                <div className="min-h-150 w-full max-w-sm bg-white md:shadow-sm">
                  <div className="mt-3 flex items-start justify-center gap-4 px-3">
                    <div className="shrink-0">
                      <img
                        src={img1}
                        alt="Royal Grand Hotel"
                        className="h-20 w-28 rounded-sm object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h1 className="text-left font-sans text-lg font-semibold capitalize">
                        boluvard hotel
                      </h1>
                      <ul className="list-none py-3 text-sm leading-6">
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="mr-2 text-black"
                          />
                          12 street, sinkor
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mr-2 text-black"
                          />
                          :john@example.com
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faMobileScreenButton}
                            className="mr-2 text-black"
                          />
                          +231
                        </li>
                      </ul>
                    </div>
                  </div>
                  <form action="/bookings/submission" method="GET">
                    <h3 className="mx-5 text-left text-sm font-semibold capitalize md:py-2">
                      availability
                    </h3>
                    {/* availability */}
                    <div className="flex flex-wrap justify-between gap-4 bg-white py-2">
                      {/* check in */}
                      <div className="ml-3 w-20">
                        {/* <p className="font-sans text-sm md:mx-2 mx-1 text-center font-semibold capitalize text-black">
                    check in
                  </p> */}
                        <div className="mt-2 flex w-36 items-center gap-2 border-none border-stone-200 px-3">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="text-sm text-black"
                          />
                          <DatePicker
                            selected={this.state.checkIn}
                            onChange={(date) =>
                              this.setState({ checkIn: date })
                            }
                            placeholderText="check in"
                            minDate={new Date()}
                            className="w-full border-none bg-gray-50 text-sm outline-none"
                          />
                        </div>
                      </div>
                      {/* check out */}
                      <div className="w-36">
                        {/* <p className="font-sans text-sm font-semibold capitalize text-black">
                    check out
                  </p> */}
                        <div className="mt-2 flex w-full items-center gap-2 border-none border-stone-200 px-3 py-2">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="text-sm text-black"
                          />
                          <DatePicker
                            selected={this.state.checkOut}
                            onChange={(date) =>
                              this.setState({ checkOut: date })
                            }
                            placeholderText="check out"
                            minDate={this.state.checkIn || new Date()}
                            className="w-full border-none bg-gray-50 text-sm outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mx-3 flex flex-wrap justify-between gap-5 bg-white md:mx-5">
                      <div className="w-32">
                        <h3 className="font-sans text-sm font-semibold capitalize">
                          guest
                        </h3>
                        <br />
                        <p className="font-sans text-sm capitalize">adult</p>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-28 border-none bg-gray-50"
                        />
                      </div>
                      <div className="w-32">
                        {/* <h3 className="text-sm font-sans capitalize font-semibold">
                    guest
                  </h3> */}
                        <br />
                        <p className="font-sans text-sm capitalize">children</p>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-28 border-none bg-gray-50"
                        />
                      </div>
                    </div>
                    <br />
                    {/* rooms and suite */}
                    <div className="mx-3 flex flex-wrap justify-between gap-5 bg-white md:mx-5">
                      <div className="w-32">
                        <h3 className="font-sans text-sm font-semibold capitalize">
                          rooms &amp; suites
                        </h3>
                        <br />
                        <p className="font-sans text-sm capitalize">suites</p>
                        <select className="w-28 border-none bg-gray-50 text-sm capitalize">
                          <option value="none">None</option>
                          <option value="family">Family</option>
                          <option value="single">Single</option>
                          <option value="double">Double</option>
                        </select>
                      </div>
                      <div className="w-32">
                        <br />
                        <p className="font-sans text-sm capitalize">rooms</p>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-28 border-none bg-gray-50"
                        />
                      </div>
                    </div>
                    {/* payment method */}
                    <div className="bg-white py-2">
                      <div className="bg-white py-3">
                        <input
                          type="tel"
                          className="mx-3 w-50 bg-gray-50"
                          placeholder=" xxxxx"
                        />
                      </div>
                      <p className="mx-3 font-sans text-sm capitalize">
                        <span className="text-red-700">*</span>we accept payment
                        using orange money
                      </p>
                    </div>
                    {/* next button */}
                    <div className="mx-3 py-3 md:mx-3">
                      <button
                        type="submit"
                        className="bg-amber-500 px-8 py-2 font-sans text-md font-medium capitalize"
                      >
                        book now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suites />
      </>
    );
  }
}

export default BoluvardHotelBooking;
