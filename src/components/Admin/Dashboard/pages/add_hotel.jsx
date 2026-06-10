import React from "react";
import AdminDashboardLayout from "../AdminDashboardLayout";

class AddHotel extends React.Component {
  render() {
    return (
      <AdminDashboardLayout title="add hotel">
        <div className="flex flex-wrap justify-start mx-5 h-96">
          <h1 className="text-2xl capitalize font-semibold">add hotel</h1>
        </div>

        {/* form */}
        <div className="flex flex-wrap justify-start mx-5 h-96">
          <form className="w-full max-w-lg">
            <input
              type="text"
              className="py-2 px-8"
              placeholder="Enter Hotel name"
            />
            <input
              type="text"
              className="py-2 px-8"
              placeholder="Address/Location"
            />
            <input
              type="text"
              className="py-2 px-8"
              placeholder="Price per night"
            />
          </form>
        </div>
      </AdminDashboardLayout>
    );
  }
}

export default AddHotel;
