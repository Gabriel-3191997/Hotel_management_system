import React from "react";

class DashBoard extends React.Component {
  render() {
    return (
      <>
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="text-black bg-white border border-transparent hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium leading-5 ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>

          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-blue-950 border-r border-gray-700">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-white hover:bg-blue-800 group"
                >
                  <span className="ms-3">Home</span>
                </a>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full justify-between px-2 py-2 text-white hover:bg-blue-800 group"
                >
                  <span className="flex-1 ms-3 text-left whitespace-nowrap">
                    Reservations
                  </span>

                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                <ul className="py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="pl-10 flex items-center px-2 py-2 text-white hover:bg-blue-800"
                    >
                      Add Hotels
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="pl-10 flex items-center px-2 py-2 text-white hover:bg-blue-800"
                    >
                      Booking Summary
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="pl-10 flex items-center px-2 py-2 text-white hover:bg-blue-800"
                    >
                      Guests
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="pl-10 flex items-center px-2 py-2 text-white hover:bg-blue-800"
                    >
                      Rooms
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-white hover:bg-blue-800"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Billing</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-white hover:bg-blue-800"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-white hover:bg-blue-800"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-white hover:bg-blue-800"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Container */}
        <div className="sm:ml-64">
          <div className="p-2 rounded-none">
            {/* Navbar */}
            <nav className="bg-white border-b fixed w-full top-0 z-50 border-none">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2">
                <span className="self-center text-2xl md:text-xl text-black md:mx-2 m-4 capitalize font-semibold whitespace-nowrap">
                  dash board
                </span>
              </div>
            </nav>

            {/* Cards */}
            <div className="flex flex-wrap md:mt-28 justify-evenly md:gap-10 gap-5">
              <div className="w-80 border border-gray-200 h-30 p-5">
                <h1 className="font-semibold text-lg">Total Reservations</h1>

                <span className="text-2xl">10</span>
              </div>

              <div className="w-80 border border-gray-200 h-30 p-5">
                <h1 className="font-semibold text-lg">Total Guests</h1>

                <span className="text-2xl">20</span>
              </div>

              <div className="w-80 border border-gray-200 h-30 p-5">
                <h1 className="font-semibold text-lg">Total Rooms</h1>

                <span className="text-2xl">5</span>
              </div>
            </div>
          </div>

          {/* Analysis Header */}
          <div id="header" className="md:my-10">
            <h1 className="font-semibold text-xl capitalize md:mx-8">
              analysis
            </h1>
          </div>

          {/* Analysis Section */}
          <div className="h-auto bg-white flex flex-wrap md:mx-8 justify-center">
            {/* Graph */}
            <div className="md:w-lg border-none h-80">
              <div className="bg-white w-full max-w-3xl">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-semibold md:p-4 text-md md:mt-5 capitalize">
                    reservations
                  </span>

                  <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                    This Week
                  </button>
                </div>

                {/* Chart */}
                <div className="relative h-72 md:mx-12">
                  {/* Grid */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[100, 75, 50, 25, 0].map((item, index) => (
                      <div
                        key={index}
                        className="relative border-t border-gray-200"
                      >
                        <span className="absolute -left-10 -top-3 text-sm">
                          {item}%
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* SVG */}
                  <svg
                    viewBox="0 0 700 260"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="
                        M20 145
                        C60 140, 90 95, 120 80
                        S190 105, 220 115
                        S300 110, 330 112
                        S410 130, 440 120
                        S520 70, 550 60
                        S620 95, 680 110
                      "
                      fill="none"
                      stroke="gray"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {[
                      [20, 145],
                      [120, 80],
                      [220, 115],
                      [330, 112],
                      [440, 120],
                      [550, 60],
                      [680, 110],
                    ].map(([x, y], index) => (
                      <circle key={index} cx={x} cy={y} r="7" fill="black" />
                    ))}
                  </svg>

                  {/* Labels */}
                  <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-sm px-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="w-xl bg-white border-none border-gray-200 p-5">
              <h1 className="text-xl capitalize font-semibold text-gray-900 mb-10 md:mx-5">
                availability
              </h1>

              <div className="flex items-center justify-center">
                {/* Circle */}
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[conic-gradient(var(--color-blue-900)_0%_40%,var(--color-blue-700)_40%_87%,var(--color-blue-500)_87%_97%,var(--color-blue-300)_97%_100%)] shadow-sm">
                  {/* Inner Circle */}
                  <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-white ring-1 ring-gray-100">
                    <h1 className="text-5xl font-semibold text-gray-900">60</h1>

                    <p className="text-gray-500 text-lg mt-2">Total Rooms</p>
                  </div>
                </div>

                {/* Legends */}
                <div className="space-y-8 ml-8">
                  {/* Available */}
                  <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-gray-500"></div>

                      <span className="text-xl text-gray-700">Available</span>
                    </div>

                    <span className="text-xl text-gray-600">24 (40%)</span>
                  </div>

                  {/* Occupied */}
                  <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>

                      <span className="text-xl text-gray-700">Occupied</span>
                    </div>

                    <span className="text-xl text-gray-600">28 (47%)</span>
                  </div>

                  {/* Reserved */}
                  <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-gray-400"></div>

                      <span className="text-xl text-gray-700">Reserved</span>
                    </div>

                    <span className="text-xl text-gray-600">6 (10%)</span>
                  </div>

                  {/* Out of Order */}
                  <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-gray-200"></div>

                      <span className="text-xl text-gray-700">
                        Out of Order
                      </span>
                    </div>

                    <span className="text-xl text-gray-600">2 (3%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
