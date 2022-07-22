// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./Components/Forecast";
import InputField from "./Components/InputFields/InputField";
import TempAndDetails from "./Components/TempAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation/TimeAndLocation";
import TopButtons from "./Components/TopButtons/TopButtons";
import getFormattedWeatherData from "./services/services";

function App() {
  const [query, setQuery] = useState({ q: "Khulna" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [units, query]);

  const weatherInfo = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };
  weatherInfo();

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <InputField setQuery={setQuery} setUnits={setUnits} units={units} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title={"hourly forecast"} items={weather.hourly} />
          <Forecast title={"daily forecast"} items={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
