import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
const InputField = () => {
  return (
    <div className="flex  flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={24}
          className="text-white transition ease-in-out hover:scale-125 cursor-pointer"
        />
        <UilLocationPoint
          size={24}
          className="text-white transition ease-in-out hover:scale-125 cursor-pointer"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ">
        <button name="metric" className="text-xl text-white font-medium">
          °C
        </button>
        <p className="text-lg text-white mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-medium">
          °F
        </button>
      </div>
    </div>
  );
};

export default InputField;
