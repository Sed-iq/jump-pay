import { FaShopware } from "react-icons/fa";
export default () => {
  return (
    <div className=" fixed z-10 text-white top-0 pt-2 flex justify-center w-full ">
      <div className=" backdrop-blur-sm p-3 w-3/4 flex items-center justify-between rounded ">
        <p className="text-sm flex items-center font-bold">
          <FaShopware className="text-teal-500 mx-2 text-xl" />
          JUM<span className="text-teal-500 font-bold">PAY</span>
        </p>
        <div className="px-2 text-xs">
          <button className="  duration-200 border-2 border-transparent hover:border-teal-500 rounded-full mx-4 px-4 p-2">
            Sign in
          </button>
          <button className="  duration-200 bg-teal-500 border-2 border-transparent hover:bg-transparent hover:border-teal-500 rounded-full mx-4  px-4 p-2">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};
