import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import user from "../../assets/testimonial-user-cover-103.png";
const Client = () => {
  const [rating, setRating] = useState<number | null>(null); 
  const [hover, setHover] = useState<number | null>(null);
  return (
    <>
      <div className="h-96 md:w-1/3 bg-white flex justify-center md:mt-0 mt-4 md:mx-0 mx-4">
        <div className="h-32 w-32  rounded-full mt-8 ">
          <img src={user} alt="" className="rounded-full mb-4" />
          <div className="text-sm font-bold text-['']  overflow-wrap break-word  flex justify-center text-center text-backText">
            <p className="w-[100%] text-xs">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>
          <div className="flex justify-center">
            <h1 className="text-xs font-bold ">Regina Miles</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-xs">Designer</h1>
          </div>
          <div className="flex">
            {[...Array(5)].map((, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    className="hidden"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    size={30}
                    className="cursor-pointer"
                    color={currentRating <= (hover ?? rating ?? 0) ? "#ffc07" : "#4e539"}

                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={()=> setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
