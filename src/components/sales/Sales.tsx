import React from "react";
import Divsale from "../divsale/Divsale";
import bones from "../../assets/product-cover-124 sec-.png"
import doctor from "../../assets/product-cover-125 sec-.png"

const Sales = () => {
  return (
    <>
      <div>
        <div className=" flex justify-center text-center ">
          <div>
            <h5 className="text-btncolor ">Practice Advice</h5>
            <h1 className="text-5xl font-bold text-white px-4">
              See Our Impressions
            </h1>
            <div className="text-white p-10 font-semibold">
              Problems trying to resolve teh conflict between
              <div>
                the two major realms of Classical physics:Newtonian mechanics
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center gap-6">
            <Divsale img={bones} head2="Best dental surgeons"/>
            <Divsale img={doctor} head2="Health Queries"/>

        </div>
        <div className="flex justify-center p-32">
          <div className="h-1 w-4 bg-btncolor border-2 border-white "></div>
        </div>
      </div>

    </>
  );
};

export default Sales;
