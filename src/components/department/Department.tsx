import React from "react";
import girls from "../../assets/technology2.png";

const Department = () => {
  return (
    <>
      <div className="md:flex justify-center gap-56">
        <div className="">
          <img src={girls} alt="" className="absolute z-10 " />
          <div className="pt-24 md:pl-32 pl-24">
            <div className="bg-department md:h-64 md:w-72 w-48 h-48  rounded relative   "></div>
          </div>
        </div>
        <div className="p-10 pt-28">
          <div className="h-1.5 w-16 bg-btncolor mb-8"></div>
          <h1 className="text-white text-5xl font-bold">Our Department</h1>
          <div className="text-white h-52 md:w-96 pt-4 font-b">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
            <div className="text-btncolor cursor-pointer pt-4">
              Learn More
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="size-4 inline-block"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-32">
          <div className="h-1 w-4 bg-btncolor border-2 border-white "></div>
        </div>
    </>
  );
};

export default Department;
