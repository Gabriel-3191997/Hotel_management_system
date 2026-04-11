import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Content/nav";

class FormSubmission extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="flex flex-wrap justify-center md:mt-20 bg-white h-auto">
          <h1 className="flex items-center gap-2 text-xl font-sans capitalize font-semibold text-center">
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
            sucessfull
          </h1>
        </div>
      </>
    );
  }
}

export default FormSubmission;
