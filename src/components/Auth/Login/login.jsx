import React from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../../Content/nav";

class LoginForm extends React.Component {
  state = {
    redirectToBookingsHome: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ redirectToBookingsHome: true });
  };

  render() {
    if (this.state.redirectToBookingsHome) {
      return <Navigate to="/bookings" replace />;
    }

    return (
      <>
        <NavBar />
        <div className="mt-16 min-h-screen bg-white px-4 py-10 sm:px-6 md:mt-3 md:flex md:items-center md:justify-center md:px-8">
          <div className="flex w-full justify-center">
            <form
              onSubmit={this.handleSubmit}
              className="w-full max-w-md md:rounded-none md:border md:border-gray-200 bg-white px-5 py-10 md:shadow-sm sm:px-8 md:px-10"
            >
              <legend>
                <h3 className="py-2 text-center font-sans text-2xl font-medium capitalize sm:text-3xl">
                  login
                </h3>
              </legend>
              <div className="mt-6 space-y-6">
                <input
                  type="text"
                  name="username"
                  className="w-full border-b border-l-0 border-r-0 border-t-0 px-0 py-3 text-left text-base outline-none"
                  placeholder="username"
                />
                <input
                  type="password"
                  name="password"
                  className="w-full border-b border-l-0 border-r-0 border-t-0 px-0 py-3 text-left text-base outline-none"
                  placeholder="password"
                />
                <div className="bg-white">
                  <p className="text-left font-sans font-normal text-md">
                    Do you have an
                    <Link to="/signup" className="text-blue-700 mx-2">
                      account
                    </Link>
                    ?
                  </p>
                  <p className="text-left font-sans font-normal text-md">
                    <Link to="/forget-password" className="capitalize text-blue-700">
                      forget password
                    </Link>
                  </p>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer w-full rounded-none border-none bg-blue-700 px-6 py-3 text-base font-medium capitalize text-white sm:w-auto"
                >
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
