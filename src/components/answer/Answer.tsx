import React from "react";

const Answer = () => {
  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="bg-white h-[170px] w-[360px]  rounded-md pt-4 pr-4">
          <div className="flex p-4 font-semibold ">
            <h1 className="text-btncolor px-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </h1>
            the quick fox jumps over the lazy dog
          </div>
          <div className="pl-16 text-backText text-sm font-semibold  ">
            Things on a very small scale behave like nothing
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
