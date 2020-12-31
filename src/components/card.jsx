export default ({ title, icon, description, className }) => {
  return (
    <div
      className={`${className} bg-white hover:scale-110 duration-100 w-1/5 mx-4 rounded flex flex-col justify-between items-center sh px-5 p-4`}
    >
      <div className="flex justify-center items-center ">
        <img srcSet={icon} alt="" className="w-3/4" />
      </div>
      <div className="my-2 mb-4">
        <h2 className="text-xl text-teal-800">{title}</h2>
      </div>
      <div>
        <h2 className="text-xs text-center text-gray-800">{description}</h2>
      </div>
    </div>
  );
};
