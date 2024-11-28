import nurse from "../../assets/technology_1.png";
import Nav from "../nav/Nav";
function Nurse() {
  return (
    <div className="bg-primary">
      <Nav />
      <div className="font-monteserat md:flex justify-evenly  text-white md:m-20 m-4">
        <div>
          <div className="md:m-32 text-7xl font-semibold md:mb-8  md:ml-0 ">
            A Great Place to<br></br> Recieve Care
          </div>
          <div className=" md:mr-32   mr-8 md:ml-0 font-bold text-xl">
            DentalCare is most focused in <br></br> helping you dicover your
            most
            <br></br> beatiful smile
          </div>
          <div className="flex md:m-32 md:mt-6 mt-4 md:ml-0">
            <button className="button">join us</button>
            <div className="ml-4">
              <button className="px-4 border-2 border-btncolor py-4 rounded uppercase text-xs font-semibold text-white tracking-wider font-monteserat ">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="md:block hidden">
            <div className="h-96 w-96  bg-btncolor rounded-full md:relative relative   md:mt-32  md:ml-14  ">
              {/* <img src={nurse} alt="" className="top-0" /> */}
            </div>
            <img
              src={nurse}
              alt=""
              className="md:top-0 md:absolute absolute z-10 md:mt-20 mt-96 md:pt-0 pt-48 top-52  md:mr-32 "
            />
          </div>

          <div className="bg-white h-40 w-40 absolute md:top-40 md:mr-60  rounded-xl md:block hidden">
            <div className="flex justify-between p-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 inline-block text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              <h1 className="text-black text-xs font-semibold">2019</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 inline-block text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-32">
        <div className="h-1 w-4 bg-btncolor border-2 border-white "></div>
      </div>
    </div>
  );
}
export default Nurse;
