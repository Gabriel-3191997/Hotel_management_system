import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Filtering extends React.Component {
  state = {
    checkIn: null,
    checkOut: null,
  };

  render() {
    return (
      <>
        {/* filter booking */}
        <div className="md:mt-36 grid grid-cols-3 gap-3 md:py-12 mt-8  border-none mx-8 mb-8 md:flex md:flex-wrap md:justify-center items-center md:gap-6 md:w-auto">
          {/* check in */}

          <div className="w-full md:w-auto">
            <p className="font-sans text-lg capitalize">check in</p>
            <div className="mt-2 flex w-full items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} className="text-xl" />
              <DatePicker
                selected={this.state.checkIn}
                onChange={(date) => this.setState({ checkIn: date })}
                placeholderText="select date"
                className="w-full"
              />
            </div>
          </div>
          {/* check out */}
          <div className="w-full md:w-auto">
            <p className="font-sans text-lg capitalize">check out</p>
            <div className="mt-2 flex w-full items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} className="text-xl" />
              <DatePicker
                selected={this.state.checkOut}
                onChange={(date) => this.setState({ checkOut: date })}
                placeholderText="Select date"
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p className="font-sans text-lg capitalize">
              adult
              <br />
              <input type="number" placeholder="0" className="w-20 md:w-auto" />
            </p>
          </div>

          <div className="w-full md:w-32">
            <p className="font-sans text-lg capitalize">
              children
              <br />
              <input type="number" placeholder="0" className="w-20 md:w-auto" />
            </p>
          </div>
          <div className="w-full md:w-auto md:ml-20">
            <input
              type="submit"
              value="search"
              className="bg-amber-500 px-5 py-3 mt-6"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Filtering;
