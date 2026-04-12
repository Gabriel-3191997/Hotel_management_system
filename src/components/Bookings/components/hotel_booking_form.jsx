import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import validator from "validator";
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
import Suites from "../Content/suites";

const renderError = (meta) =>
  meta.touched && meta.error ? (
    <p className="mt-2 text-sm text-red-500">{meta.error}</p>
  ) : null;

const validateBookingForm = (values) => {
  const errors = {};

  if (!values.checkIn) {
    errors.checkIn = "Check in date is required.";
  }

  if (!values.checkOut) {
    errors.checkOut = "Check out date is required.";
  } else if (values.checkIn && values.checkOut < values.checkIn) {
    errors.checkOut = "Check out date must be after check in.";
  }

  if (validator.isEmpty(String(values.adult || "").trim())) {
    errors.adult = "At least 1 adult is required.";
  } else if (!validator.isInt(String(values.adult), { min: 1 })) {
    errors.adult = "At least 1 adult is required.";
  }

  if (!validator.isEmpty(String(values.children || "").trim()) &&
      !validator.isInt(String(values.children), { min: 0 })) {
    errors.children = "Children cannot be negative.";
  }

  if (validator.isEmpty(String(values.rooms || "").trim())) {
    errors.rooms = "At least 1 room is required.";
  } else if (!validator.isInt(String(values.rooms), { min: 1 })) {
    errors.rooms = "At least 1 room is required.";
  }

  const paymentNumber = String(values.paymentNumber || "").trim();
  if (validator.isEmpty(paymentNumber)) {
    errors.paymentNumber = "Payment number is required.";
  } else if (!validator.isLength(paymentNumber, { min: 5 })) {
    errors.paymentNumber = "Payment number must be at least 5 digits.";
  }

  return errors;
};

function HotelBookingForm({
  hotelName,
  location,
  heroImage,
  galleryImages,
}) {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="mx-3 mt-14 bg-white md:mt-20 lg:mx-44">
        <Link
          to="/bookings"
          className="text-left font-sans text-sm font-medium capitalize text-blue-700"
        >
          back
        </Link>
      </div>
      <div className="mt-5 flex h-auto flex-wrap justify-evenly bg-white">
        <div className="md:w-auto">
          <img src={heroImage} alt={hotelName} className="w-lg" />
          <div className="mx-3 md:mx-0 md:py-8">
            <div className="my-5 flex flex-wrap justify-start gap-4 md:my-10 md:gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="w-[30%] min-w-24 sm:w-28">
                  <img
                    src={image}
                    alt=""
                    className="h-20 w-full object-cover md:rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex h-auto flex-wrap items-start justify-center gap-6 px-4 md:justify-evenly md:px-6">
            <div className="w-full max-w-xl"></div>
            <div className="flex w-full max-w-xl justify-center">
              <div className="min-h-150 w-full max-w-sm bg-white md:shadow-sm">
                <div className="mt-3 flex items-start justify-center gap-4 px-3">
                  <div className="shrink-0">
                    <img
                      src={heroImage}
                      alt={hotelName}
                      className="h-20 w-28 rounded-sm object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-left font-sans text-lg font-semibold capitalize">
                      {hotelName}
                    </h1>
                    <ul className="list-none py-3 text-sm leading-6">
                      <li>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="mr-2 text-black"
                        />
                        {location}
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

                <Form
                  onSubmit={() => navigate("/bookings/submission")}
                  validate={validateBookingForm}
                  initialValues={{ suite: "none" }}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <h3 className="mx-5 text-left text-sm font-semibold capitalize md:py-2">
                        availability
                      </h3>
                      <div className="flex flex-wrap justify-between gap-4 bg-white py-2">
                        <Field name="checkIn">
                          {({ input, meta }) => (
                            <div className="ml-3 w-20">
                              <div className="mt-2 flex w-36 items-center gap-2 border-none border-stone-200 px-3">
                                <FontAwesomeIcon
                                  icon={faCalendar}
                                  className="text-sm text-black"
                                />
                                <DatePicker
                                  selected={input.value || null}
                                  onChange={input.onChange}
                                  placeholderText="check in"
                                  minDate={new Date()}
                                  className="w-full border-none bg-gray-50 text-sm outline-none"
                                />
                              </div>
                              {renderError(meta)}
                            </div>
                          )}
                        </Field>

                        <Field name="checkOut">
                          {({ input, meta, form }) => (
                            <div className="w-36">
                              <div className="mt-2 flex w-full items-center gap-2 border-none border-stone-200 px-3 py-2">
                                <FontAwesomeIcon
                                  icon={faCalendar}
                                  className="text-sm text-black"
                                />
                                <DatePicker
                                  selected={input.value || null}
                                  onChange={input.onChange}
                                  placeholderText="check out"
                                  minDate={form.getState().values.checkIn || new Date()}
                                  className="w-full border-none bg-gray-50 text-sm outline-none"
                                />
                              </div>
                              {renderError(meta)}
                            </div>
                          )}
                        </Field>
                      </div>

                      <div className="mx-3 flex flex-wrap justify-between gap-5 bg-white md:mx-5">
                        <Field name="adult">
                          {({ input, meta }) => (
                            <div className="w-32">
                              <h3 className="font-sans text-sm font-semibold capitalize">
                                guest
                              </h3>
                              <br />
                              <p className="font-sans text-sm capitalize">adult</p>
                              <input
                                {...input}
                                type="number"
                                placeholder="0"
                                className="w-28 border-none bg-gray-50"
                              />
                              {renderError(meta)}
                            </div>
                          )}
                        </Field>

                        <Field name="children">
                          {({ input, meta }) => (
                            <div className="w-32">
                              <br />
                              <p className="font-sans text-sm capitalize">children</p>
                              <input
                                {...input}
                                type="number"
                                placeholder="0"
                                className="w-28 border-none bg-gray-50"
                              />
                              {renderError(meta)}
                            </div>
                          )}
                        </Field>
                      </div>

                      <br />

                      <div className="mx-3 flex flex-wrap justify-between gap-5 bg-white md:mx-5">
                        <Field name="suite">
                          {({ input, meta }) => (
                            <div className="w-32">
                              <h3 className="font-sans text-sm font-semibold capitalize">
                                rooms &amp; suites
                              </h3>
                              <br />
                              <p className="font-sans text-sm capitalize">suites</p>
                              <select
                                {...input}
                                className="w-28 border-none bg-gray-50 text-sm capitalize"
                              >
                                <option value="none">None</option>
                                <option value="family">Family</option>
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                              </select>
                              {renderError(meta)}
                            </div>
                          )}
                        </Field>

                        <Field name="rooms">
                          {({ input, meta }) => (
                            <div className="w-32">
                              <br />
                              <p className="font-sans text-sm capitalize">rooms</p>
                              <input
                                {...input}
                                type="number"
                                placeholder="0"
                                className="w-28 border-none bg-gray-50"
                              />
                              {renderError(meta)}
                            </div>
                          )}
                        </Field>
                      </div>

                      <div className="bg-white py-2">
                        <Field name="paymentNumber">
                          {({ input, meta }) => (
                            <div className="bg-white py-3">
                              <input
                                {...input}
                                type="tel"
                                className="mx-3 w-50 bg-gray-50"
                                placeholder=" xxxxx"
                              />
                              <div className="mx-3">{renderError(meta)}</div>
                            </div>
                          )}
                        </Field>
                        <p className="mx-3 font-sans text-sm capitalize">
                          <span className="text-red-700">*</span>we accept payment
                          using orange money
                        </p>
                      </div>

                      <div className="mx-3 py-3 md:mx-3">
                        <button
                          type="submit"
                          className="cursor-pointer bg-amber-500 px-8 py-2 font-sans text-md font-medium capitalize"
                        >
                          book now
                        </button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suites />
    </>
  );
}

export default HotelBookingForm;
