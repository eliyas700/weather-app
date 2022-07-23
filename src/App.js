// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./Components/Forecast";
import InputField from "./Components/InputFields/InputField";
import TempAndDetails from "./Components/TempAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation/TimeAndLocation";
import TopButtons from "./Components/TopButtons/TopButtons";
import getFormattedWeatherData from "./services/services";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Components/Footer";
function App() {
  const [query, setQuery] = useState({ q: "Khulna" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "Current Location";
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name} , ${data.country} `
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [units, query]);

  const weatherInfo = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
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
      className={`mx-auto  mt-4 py-5 lg:px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <InputField
        setQuery={setQuery}
        weather={weather}
        setUnits={setUnits}
        units={units}
      />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast
            title={"hourly forecast"}
            units={units}
            items={weather.hourly}
          />
          <Forecast
            title={"daily forecast"}
            units={units}
            items={weather.daily}
          />
        </>
      )}
      <Footer />
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
