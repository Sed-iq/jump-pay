export default () => {
  return (
    <div className=" sticky top-0 pt-2 flex justify-center w-full ">
      <div className=" backdrop-blur-sm p-3 w-3/4 flex items-center justify-between rounded ">
        <p className="text-sm font-bold">
          JUM<span className="text-blue-700 font-bold">PAY</span>
        </p>
        <div className="px-2 text-xs">
          <button className=" bg-blue-700 hover:bg-blue-900 duration-200 border-2 border-transparent hover:border-white mx-4 text-white rounded px-4 p-2">
            Join us
          </button>
          <button className=" bg-blue-700 hover:bg-blue-900 duration-200 border-2 border-transparent hover:border-white mx-4 text-white px-4 rounded p-2">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
