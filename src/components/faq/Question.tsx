import React from "react";
import Answer from "../answer/Answer";

const Question = () => {
  return (
    <>
      <div>
        <div className="flex justify-center p-32">
          <div className="h-1 w-4 bg-btncolor border-2 border-white "></div>
        </div>
        <div className=" flex justify-center text-center ">
          <div>
            <h1 className="text-5xl font-bold text-white px-4">FAQ</h1>
            <div className="text-white p-10 font-semibold">
              Problems trying to resolve teh conflict between
              <div>
                the two major realms of Classical physics:Newtonian mechanics
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div>
        <div className="md:flex gap-8">
        <Answer />
        <Answer />
        <Answer />
        </div>
        <div className="md:flex  gap-8">
        <Answer />
        <Answer />
        <Answer />
        </div>
        <div className="md:flex  gap-8">
        <Answer />
        <Answer />
        <Answer />
        </div>
        </div>
    
      </div>
    
      
    </>
  );
};

export default Question;
