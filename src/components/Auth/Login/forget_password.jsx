import React from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../../Content/nav";

class ForgotPassword extends React.Component {
  state = {
    redirectToTwoFactor: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ redirectToTwoFactor: true });
  };

  render() {
    if (this.state.redirectToTwoFactor) {
      return <Navigate to="/two-factor-auth" replace />;
    }

    return (
      <>
        <NavBar />
        <div className="mt-16 min-h-screen bg-white px-4 py-10 sm:px-6 md:mt-3 md:flex md:items-center md:justify-center md:px-8">
          <div className="flex w-full justify-center">
            <form
              onSubmit={this.handleSubmit}
              className="w-full max-w-md bg-white px-5 py-10 sm:px-8 md:rounded-none md:border md:border-gray-200 md:px-10 md:shadow-sm"
            >
              <legend>
                <h3 className="py-2 text-left font-sans text-2xl font-medium capitalize sm:text-3xl">
                  forget password
                </h3>
              </legend>
              <div className="mt-6 space-y-6">
                <input
                  type="email"
                  name="email"
                  className="w-full border-b border-l-0 border-r-0 border-t-0 px-0 py-3 text-left text-base outline-none"
                  placeholder="email address"
                />
                <p className="text-left font-sans text-md font-normal">
                  Remember your password?
                  <Link to="/login" className="mx-2 text-blue-700">
                    login
                  </Link>
                </p>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-none border-none bg-blue-700 px-6 py-3 text-base font-medium capitalize text-white sm:w-auto"
                >
                  continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
