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
          class="text-heading bg-white box-border border border-transparent hover:bg-white focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>

        <aside
          id="sidebar-multi-level-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-blue-950 border-e border-default">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                >
                  <span class="ms-3">Home</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  class="flex items-center w-full justify-between px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    Reservations
                  </span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                    >
                      Add Hotels
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                    >
                      Booking Summary
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                    >
                      Guests
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                    >
                      Rooms
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Billing</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-blue-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* container */}
        <div class=" sm:ml-64">
          <div class="p-2 border-2 border-gray-200 border-dashed border-none rounded-none">
            <nav class="bg-white border-b  fixed w-full top-0 z-index border-none border-default">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between  p-2">
                <span class="self-center text-2xl md:text-xl text-heading md:mx-2 m-4 capitalize font-semibold whitespace-nowrap">
                  dash board
                </span>
              </div>
            </nav>

            {/* cards */}
            <div className="flex flex-wrap md:mt-28 justify-evenly md:gap-10 gap-5">
              <div className="w-80 border border-gray-200 h-30">
                <h1 className="font-semibold text-md text-lg md:mx-5 md:py-3">
                  Total Reservations
                </h1>
                <span className="text-left md:mx-5 md:py-3 text-2xl">10</span>
              </div>
              <div className="w-80 border border-gray-200 h-30">
                <h1 className="font-semibold text-md text-lg md:mx-5 md: py-3">
                  Total Guests
                </h1>
                <span className="text-left md:mx-5 md:py-3 text-2xl">20</span>
              </div>
              <div className="w-80 border border-gray-200 h-30">
                <h1 className="font-semibold text-md text-lg md:mx-5 md: py-3">
                  Total Rooms
                </h1>
                <span className="text-left md:mx-5 md:py-3 text-2xl">5</span>
              </div>
            </div>
          </div>
          <div id="header" className="md:my-10">
            <h1 className="font-semibold text-md md:mx-8 text-xl capitalize md:mx-5 md: py-3">
              analysis
            </h1>
          </div>
          <div
            className="h-auto bg-white flex flex-wrap md:mx-8 md:justify-evenly justify-center md:mx-5"
            id="analysis"
          >
            <div
              id="analysis-cards"
              className="md:w-lg border capitalize border-none border-gray-200 h-80"
            >
              <div className="bg-white rounded-2xl rounded-none  border-none border-gray-200 w-full max-w-3xl">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-semibold md:p-4 text-md  md:mt-5">
                    reservations
                  </span>
                  <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                    This Week
                  </button>
                </div>

                {/* Chart */}
                <div className="relative h-72 md:mx-12">
                  {/* Horizontal Grid Lines */}
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

                  {/* SVG Line Graph */}
                  <svg
                    viewBox="0 0 700 260"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    {/* Line */}
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
                      stroke="#525354"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Dots */}
                    {[
                      [20, 145],
                      [120, 80],
                      [220, 115],
                      [330, 112],
                      [440, 120],
                      [550, 60],
                      [680, 110],
                    ].map(([x, y], index) => (
                      <circle key={index} cx={x} cy={y} r="7" fill="#1F1F1F" />
                    ))}
                  </svg>

                  {/* Bottom Labels */}
                  <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-sm  px-2">
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
            <div
              id="analysis-cards"
              className="w-auto bg-white border border-gray-200 p-5"
            >
              {/* Header */}
              <h1 className="text-2xl font-semibold text-gray-900 mb-10">
                availability
              </h1>

              <div className="flex items-center justify-center">
                {/* Circle */}
                <div className="relative w-56 h-56">
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(
            #bdbdbd 0% 40%,
            #d6d6d6 40% 87%,
            #c4c4c4 87% 97%,
            #e3e3e3 97% 100%
          )`,
                    }}
                  >
                    {/* Inner Circle */}
                    <div className="absolute inset-5 bg-white rounded-full flex flex-col items-center justify-center">
                      <h1 className="text-5xl font-semibold text-gray-900">
                        60
                      </h1>

                      <p className="text-gray-500 text-lg mt-2">Total Rooms</p>
                    </div>
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
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>

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
