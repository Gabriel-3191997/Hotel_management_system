import React from "react";
import NavBar from "../../Content/nav";

class BellaCassaHotelBooking extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-white px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Reservation
            </p>
            <h1 className="mt-3 text-3xl font-semibold capitalize text-stone-900">
              Bella Cassa Hotel Booking
            </h1>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              This booking page is ready to receive reservations for Bella
              Cassa Hotel.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default BellaCassaHotelBooking;
