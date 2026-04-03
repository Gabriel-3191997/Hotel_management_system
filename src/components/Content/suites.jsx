import React from "react";
import img1 from "../../assets/images/2Q== (18).jpeg";
import img2 from "../../assets/images/Z (17).jpeg";
import img3 from "../../assets/images/Z (18).jpeg";
import Footer from "./footer";

class RoomSuites extends React.Component{

    render(){

        return(
            <>
            <div className="flex flex-wrap justify-center">
                <h1 className="text-3xl font-sans font-semibold md:my-8 my-8 capitalize">
                    room &amp; suites
                </h1>
            </div>
    <div className="h-96 md:justify-center flex flex-wrap md:gap-8 gap-20 justify-evenly md:mt-16">
        <div className="w-auto">
            <img src={img1} alt="family bed" srcset="" />
            <div className="flex flex justify-center py-3 capitalize font-sans">
                family bed
            </div>
        </div>
        <div className="w-auto">
            <img src={img2} alt="single bed" srcset="" />
            <div className="flex flex justify-center py-3 capitalize font-sans">
                single bed
            </div>
        </div>
        <div className="w-auto">
            <img src={img3} alt="Double Bed" srcset="" className="md:h-44 w-66 md:w-66" />
            <div className="flex flex justify-center py-3 capitalize font-sans">
                double bed
            </div>
        </div>
    </div>
    <Footer/>
            </>
        );
    }
}

export default RoomSuites;
