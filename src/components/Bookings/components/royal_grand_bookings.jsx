import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../Content/nav";
import img1 from "../../../assets/images/Z (6).jpeg";

class RoyalGrandBooking extends React.Component {
  state = {
    checkIn: null,
    checkOut: null,
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="flex min-h-screen flex-wrap items-start justify-center gap-6 px-4 py-6 md:mt-16 md:justify-evenly md:px-6">
          <div className="w-full max-w-xl"></div>
          {/* booking form */}
          <div className="flex w-full max-w-xl justify-center">
            <div className="min-h-128 w-full max-w-sm bg-white md:shadow-sm">
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
                    royal grand hotel
                  </h1>
                  <ul className="list-none py-3 text-sm leading-6">
                    <li>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mr-2 text-black"
                      />
                      15 street
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
              <h3 className="text-left md:py-2 font-semibold mx-5 text-sm capitalize">
                availability
              </h3>
              {/* availability */}
              <div className="flex flex-wrap justify-between gap-4 bg-white py-2">
                {/* check in */}
                <div className="w-20 ml-3">
                  {/* <p className="font-sans text-sm md:mx-2 mx-1 text-center font-semibold capitalize text-black">
                    check in
                  </p> */}
                  <div className="mt-2 flex w-36 items-center gap-2 border-none border-stone-200 px-3 ">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-sm text-black"
                    />
                    <DatePicker
                      selected={this.state.checkIn}
                      onChange={(date) => this.setState({ checkIn: date })}
                      placeholderText="check in"
                      minDate={new Date()}
                      className="w-full text-sm border-none bg-gray-50 outline-none"
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
                      onChange={(date) => this.setState({ checkOut: date })}
                      placeholderText="check out"
                      minDate={this.state.checkIn || new Date()}
                      className="w-full border-none bg-gray-50 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 md:mx-5  mx-3 justify-between bg-white">
                <div className="w-32">
                  <h3 className="text-sm font-sans capitalize font-semibold">
                    guest
                  </h3>
                  <br />
                  <p className="text-sm font-sans capitalize">adult</p>
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
                  <p className="text-sm font-sans capitalize">children</p>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-28 border-none bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RoyalGrandBooking;
