import React from "react";

function TimeAndLocation() {
  return (
    <div>
      {" "}
      <div className="flex flex-row justify-center my-6">
        <p className="text-white text-lg ">
          Tuesday,31 May 2022 | Local time 12:48 PM
        </p>
      </div>
      <div className="flex flex-row justify-center my-6">
        <p className="text-white text-2xl font-semibold ">Berlin, DE</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
