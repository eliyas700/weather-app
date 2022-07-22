// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "./App.css";
import Forecast from "./Components/Forecast";
import InputField from "./Components/InputFields/InputField";
import TempAndDetails from "./Components/TempAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation/TimeAndLocation";
import TopButtons from "./Components/TopButtons/TopButtons";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <InputField />
      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title={"hourly forecast"} />
    </div>
  );
}

export default App;
