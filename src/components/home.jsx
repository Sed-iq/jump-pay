import Man from "./../assets/images/excited-caucasian-man-glasses-showing-credit-card-concept-shopping-removebg-preview.png";
import Card from "./card";
import Nav from "./nav";
import JetStart from "./../assets/images/Startup_Flatline.svg";
import RocketStart from "./../assets/images/Startup_Monochromatic.svg";
import BusinessStart from "./../assets/images/Businessman_Isometric.svg";
import Woman from "./../assets/images/Personal_Branding_Posing_in_a_Coffee_Shop-removebg-preview.png";
import Footer from "./footer";
import { FaApple, FaGooglePlay } from "react-icons/fa";
export default () => {
  return (
    <>
      <Nav />
      <div className="grad pt-10">
        <div className="flex justify-between w-full">
          <div className=" flex flex-col justify-center items-center w-1/2">
            {/* Write up */}
            <div className="">
              <p className="text-4xl text-gray-100">A better way</p>
              <p className="text-4xl text-gray-100">to manage Finances</p>
              <div className="mt-5">
                <button className="text-white border-2 p-2 hover:bg-teal-500 duration-100 hover:border-transparent rounded-full w-full border-teal-500">
                  Get Started For <span>Free</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            {/* Image */}
            <img src="" alt="" srcset={Man} className="w-full" />
          </div>
        </div>
      </div>
      {/* First */}
      <div className="bg-t h-half flex items-center justify-center">
        <Card
          icon={JetStart}
          title={"Jet Speed Transcations"}
          description={
            "Transactions at the speed of light, making it seem almost instant, record tracking and expense management"
          }
        />
        <Card
          icon={RocketStart}
          title={"Automated Operations"}
          description={
            "Fully automated Operations, up and running 24/7 with no down time and minimal errors"
          }
          className={"-translate-y-3/4 "}
        />
        <Card
          icon={BusinessStart}
          title={"Reliable Support"}
          description={
            "Our customer support lines are 100% full proof and reliable, with enough staffs to answer questions and get you up and running again."
          }
        />
      </div>
      <div className="flex bg-jean flex-row-reverse justify-between">
        <div className="w-1/2 p-2 flex flex-col justify-center text-white">
          <p className="text-4xl text-gray-100 my-3">Are you always</p>
          <p className="text-4xl text-gray-100">
            on the <span className="text-teal-700 font-bold">GO?</span>
          </p>
          <p className="mt-4 text-sm">
            Our mobile app is just the thing for you
          </p>{" "}
          <p className=" text-sm">
            anywhere, everywhere, we've got you covered.
          </p>
          <div className="flex  my-4">
            <button className="p-1 hover:scale-125 duration-100 rounded mx-5 bg-black flex  text-white">
              <div className="flex text-2xl mx-0.5 justify-center items-center">
                <FaApple />
              </div>
              <div>
                <p className=" small text-start">
                  Download at the <br />
                  <span className="text-sm">App Store</span>
                </p>
              </div>
            </button>
            <button className="p-1 hover:scale-125 duration-100 rounded bg-black flex  text-white">
              <div className="flex text-2xl mx-0.5 justify-center items-center">
                <FaGooglePlay />
              </div>
              <div>
                <p className=" small text-start">
                  Get it at <br />
                  <span className="text-sm">Google play</span>
                </p>
              </div>
            </button>
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img srcSet={Woman} alt="" className="w-1/2 " />
        </div>
      </div>
    </>
  );
};
