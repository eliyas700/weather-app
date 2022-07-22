import React from "react";
import { formatToLocalTime } from "../../services/services";

function TimeAndLocation({ weather }) {
  console.log(weather);
  const { name, country, dt, timezone } = weather;
  return (
    <div>
      {" "}
      <div className="flex flex-row justify-center my-6">
        <p className="text-white text-lg ">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="flex flex-row justify-center my-6">
        <p className="text-white text-2xl font-semibold ">{`${name} ,${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
