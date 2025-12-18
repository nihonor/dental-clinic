import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Join = () => {
  return (
    <>
      <div>
        <div className="flex justify-center p-32">
          <div className="h-1 w-4 bg-btncolor border-2 border-white "></div>
        </div>
        <div className=" flex justify-center text-center ">
          <div>
            <h5 className="text-btncolor font-bold">Newsletter</h5>
            <h1 className="text-4xl font-bold text-white px-4">JOIN US</h1>
            <div className="text-white p-10 font-semibold">
              Problems trying to resolve teh conflict between
              <div>
                the two major realms of Classical physics:Newtonian mechanics
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32">
          <div className="flex justify-center ">
            <input
              type="text"
              className=" w-1/2 py-4 pl-6 font-semibold text-sm rounded-s"
              placeholder="Your Email"
            />
            <button className="px-8 bg-btncolor py-[20px] rounded-e text-xs font-semibold text-white tracking-wider font-monteserat border-2 border-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" bg-white md:flex justify-center gap-12 p-10">
          <div>
            <h1 className="font-semibold p-2">Company Info</h1>
            <ul className="pl-2 text-backText font-semibold">
              <li className="pt-4  ">
                {" "}
                <a href="#" className=" hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Carrier</a>
              </li>
              <li className="pt-3">
                <a href="#">We are hiring</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-2">Legal</h1>
            <ul className="pl-2 text-backText font-semibold">
              <li className="pt-4 ">
                {" "}
                <a href="#">About Us</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Carrier</a>
              </li>
              <li className="pt-3">
                <a href="#">We are hiring</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-2">Features</h1>
            <ul className="pl-2 text-backText font-semibold">
              <li className="pt-4 ">
                {" "}
                <a href="#">Business Marketing</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">User Analytic</a>
              </li>
              <li className="pt-3">
                <a href="#">Live Chat</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-2">Resources</h1>
            <ul className="pl-2 text-backText font-semibold">
              <li className="pt-4 ">
                {" "}
                <a href="#">IOS & Android</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Watch a Demo</a>
              </li>
              <li className="pt-3">
                <a href="#">Customers</a>
              </li>
              <li className="pt-3">
                {" "}
                <a href="#">Api</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold p-2">Get In Touch</h1>
            <ul className="pl-2 text-backText font-semibold">
              <li className="pt-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 inline-block text-btncolor "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <a href="#" className="pl-2">
                  (480) 555-0103
                </a>
              </li>
              <li className="pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 inline-block text-btncolor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <a href="#" className="pl-2">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </a>
              </li>
              <li className="pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 inline-block text-btncolor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <a href="#" className="pl-2">
                  debra.holt@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-bgFooter flex justify-between md:px-40 px-3 py-6 ">
          <div className="text-backText">Made With ❤️ By <a href="https://www.instagram.com/niho_nor/" target="blank" className="underline hover:text-gray-800">Honore</a> All Right Reserved </div>
          <div className="text-btncolor flex gap-6 "><FaInstagram className="size-7"/><FaFacebook className="size-7"/><FaTwitter className="size-7"/></div>
        </div>
      </div>
    </>
  );
};

export default Join;
