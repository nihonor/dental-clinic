import React from "react";
import Emerg from "../card/Emerg";
import icon1 from "../../assets/icon cool-icon-15.png";
import icon2 from "../../assets/006-heart-rate.png";
const Impre = () => {
  return (
    <>
      <div className=" font-monteserat">
        <div className=" flex justify-center text-center ">
          <div>
            <h5 className="text-btncolor">Practice Advice</h5>
            <h1 className="text-4xl font-bold text-white px-4">
              See Our Impressions
            </h1>
            <div className="text-white p-10 font-semibold">
              Problems trying to resolve teh conflict between 
              <div>the two major  realms of Classical physics:Newtonian mechanics</div>
             
            </div>
          </div>
        </div>
        <div className="md:flex justify-center grid">
          <Emerg
            src={icon1}
            message="The gradual accumulation and small-scale.."
            head="Emergency Case"
          />
          <Emerg
            src={icon2}
            message="The gradual accumulation and small-scale.."
            head="Quick examination"
          />
        </div>
        <div className="flex justify-center p-32">
          <div className="h-1 w-4 bg-btncolor border-2 border-white "></div>
        </div>
      </div>
    </>
  );
};

export default Impre;
