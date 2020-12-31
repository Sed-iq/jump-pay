import { MdCopyright } from "react-icons/md";

export default () => {
  return (
    <div className="p-2 small text-white">
      <div className="flex ">
        <h2 className="flex ">
          Copyright
          <MdCopyright className="" />
        </h2>
        <p>2023</p>
        <p className="ml-3">By Sediq</p>
      </div>
    </div>
  );
};
