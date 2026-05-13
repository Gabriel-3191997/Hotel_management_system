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
          <div class="h-full px-3 py-4 overflow-y-auto bg-black border-e border-default">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                >
                  <span class="ms-3">Home</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  class="flex items-center w-full justify-between px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
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
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                    >
                      Add Hotels
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                    >
                      Booking Summary
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                    >
                      Guests
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="pl-10 flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                    >
                      Rooms
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Billing</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center px-2 py-1.5 text-white rounded-none hover:bg-gray-800 hover:text-white group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

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
            className="h-80 bg-white flex flex-wrap md:mx-8 md:justify-between justify-center md:mx-5"
            id="analysis"
          >
            <div
              id="analysis-cards"
              className="md:w-xl border capitalize border-gray-200 h-80"
            >
              <span className="font-semibold md:p-4 text-md  md:mt-5">
                reservations
              </span>
            </div>
            <div id="analysis-cards" className="w-80 border h-50">
              chart2
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
